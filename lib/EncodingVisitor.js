// EncodingVisitor.js - Marak Squires 2023
import Visitor from './Visitor.js';
import BitStream from '../binary/BitStream.js';
import BitBuffer from '../binary/BitBuffer.js';
let bufferSize = 1024 * 512;
class EncodingVisitor extends Visitor {
  constructor(middlewares) {
    super();
    this.stream = new BitStream(new BitBuffer(bufferSize));
    this.stream.offset = 0;
    this.bitmask = 0;
    this.bitPosition = 0;
    this.currentKeyPath = '';
    this.middlewares = middlewares || [];

  }
  createVisitorInstance() {
    return new EncodingVisitor(this.middlewares);
  }
  encode(object, schema, currentKeyPath = '') {
    this.visitObject(object, schema, currentKeyPath);
    return this.getBuffer();
  }
  visitObject(object, schema, currentKeyPath = '') {
    let localBitmask = this.calculateBitmask(object, schema);
    this.writeBitmaskToLocalStream(localBitmask);
    this.encodeFields(object, schema, currentKeyPath);
  }
  calculateBitmask(object, schema) {
    let localBitmask = 0;
    const sortedKeys = Object.keys(schema).sort();
    let bitPosition = 0;
    for (const key of sortedKeys) {
      const field = schema[key];
      const fieldValue = object[key];
      if (fieldValue !== undefined) {
        localBitmask |= (1 << bitPosition);
      } else { }
      bitPosition++;
    }
    return localBitmask;
  }
  encodeFields(object, schema, currentKeyPath) {
    const sortedKeys = Object.keys(schema).sort();
    this.bitPosition = 0;
    for (const key of sortedKeys) {
      const field = schema[key];
      const fieldValue = object[key];
      if (fieldValue !== undefined) {
        let newKeyPath = currentKeyPath ? `${currentKeyPath}.${key}` : key;
        this.visitField(field, fieldValue, newKeyPath);
      }
      this.bitPosition++;
    }
  }
  visitField(field, fieldValue, currentKeyPath) {
    let fieldBitmask = 0;
    let key = currentKeyPath.split('.').pop();
    if (field.type === 'Record') {
      if (fieldValue !== undefined) {
        fieldBitmask = 1;
        this.encodeNestedStructure(fieldValue, field.schema, currentKeyPath);
      }
    } else if (field.type === 'Collection') {
      if (Array.isArray(fieldValue) && fieldValue.length > 0) {
        fieldBitmask = 1;
        this.encodeCollection(fieldValue, field.schema, currentKeyPath);
      }
    } else {
      fieldBitmask = fieldValue !== undefined ? 1 : 0;
      if (fieldValue !== undefined) {
        this.encodeField(fieldValue, field.type, field, key, currentKeyPath);
      }
    }
    return fieldBitmask;
  }
  writeBitmaskToLocalStream(bitmask) {
    this.stream.writeUInt32(bitmask >>> 0);
  }
  encodeNestedStructure(object, schema, currentKeyPath = '') {
    const nestedVisitor = this.createVisitorInstance();
    nestedVisitor.visitObject(object, schema, currentKeyPath);
    this.appendToStream(nestedVisitor.stream);
  }
  encodeCollection(collection, schema, currentKeyPath = '') {
    this.stream.writeUInt16(collection.length);
    for (let i = 0; i < collection.length; i++) {
      const item = collection[i];
      let itemKeyPath = `${currentKeyPath}[${i}]`;
      const itemVisitor = this.createVisitorInstance();
      const itemBitmask = itemVisitor.encode(item, schema, itemKeyPath);
      this.stream.writeUInt32(itemBitmask >>> 0);
      this.encodeNestedStructure(item, schema, itemKeyPath);
    }
  }
  appendToStream(otherStream) {
    const bitsToAppend = otherStream.offset;
    for (let i = 0; i < bitsToAppend; i++) {
      const bit = otherStream.bitBuffer._getBit(i);
      this.stream.bitBuffer._setBit(bit, this.stream.offset + i);
    }
    this.stream.offset += bitsToAppend;
  }
  encodeField(value, type, fullSchema, key, currentKeyPath = '') {
    let modifiedValue = value;
    if (this.middlewares.length > 0) {
      for (let middleware of this.middlewares) {
        modifiedValue = middleware(modifiedValue, type, fullSchema, key, currentKeyPath);
      }
    }
    let stream = this.stream;
    switch (type) {
      case 'Int10':
        stream.writeInt10(modifiedValue);
        break;
      case 'UInt10':
        stream.writeUInt10(modifiedValue);
        break;
      case 'UInt12':
        stream.writeUInt12(modifiedValue);
        break;
      case 'UInt16':
        stream.writeUInt16(modifiedValue);
        break;
      case 'UTF8String':
        let utf8Bytes = Buffer.from(modifiedValue, 'utf8');
        stream.writeUInt8(utf8Bytes.length);
        for (let i = 0; i < utf8Bytes.length; i++) {
          stream.writeUInt8(utf8Bytes[i]);
        }
        break;
      case 'Enum':
        let enumValue = fullSchema.enum[modifiedValue];
        stream.writeUInt8(enumValue);
        break;
      case 'Boolean':
        stream.writeUInt8(modifiedValue ? 1 : 0);
        break;
      case 'Int16':
        stream.writeInt16(modifiedValue);
        break;
      case 'Int32':
        stream.writeInt32(modifiedValue);
        break;
      case 'Float64':
        stream.writeFloat64(modifiedValue);
        break;
      case 'ASCIIString':
        let asciiBytes = Buffer.from(modifiedValue, 'ascii');
        stream.writeUInt8(asciiBytes.length);
        for (let i = 0; i < asciiBytes.length; i++) {
          stream.writeUInt8(asciiBytes[i]);
        }
        break;
    }
    return modifiedValue;
  }
  getEnumValue(value, enumSchema) {
    if (value in enumSchema.enum) {
      return enumSchema.enum[value];
    } else {
      return null;
    }
  }
  getEncodedBuffer() {
    return this.stream.bitBuffer.byteArray.slice(0, this.stream.offset);
  }
  getBuffer() {
    let bytesUsed = Math.ceil(this.stream.offset / 8);
    let finalBuffer = new BitBuffer(bytesUsed * 8);
    finalBuffer.byteArray.set(this.stream.bitBuffer.byteArray.subarray(0, bytesUsed));
    return finalBuffer;
  }
  resetStreamOffset() {
    this.stream.offset = 0;
  }
}
export default EncodingVisitor;