// DecodingVisitor.js - Marak Squires 2023
import Visitor from './Visitor.js';
import BitStream from '../binary/BitStream.js';

class DecodingVisitor extends Visitor {
  constructor(buffer) {
    super();
    this.buffer = buffer;
    this.bitPosition = 0;
    this.stream = new BitStream(buffer);

    this.enumCache = new Map();
  }

  visitObject(schema) {
    let decodedObject = {};
    let localBitmask = this.readBitmask();

    const sortedKeys = Object.keys(schema).sort();

    for (const key of sortedKeys) {
      if (this.isFieldPresent(localBitmask, this.bitPosition)) {

        decodedObject[key] = this.visitField(schema[key]);

      } else {

      }

      this.bitPosition++;
    }

    return decodedObject;
  }

  visitField(field) {

    if (field.type === 'Record') {

      const nestedVisitor = new DecodingVisitor(this.stream);

      return nestedVisitor.visitObject(field.schema);
    } else if (field.type === 'Collection') {
      return this.decodeCollection(field.schema);
    } else {
      return this.decodeField(field.type, field);
    }
  }

  readBitmask() {

    const bitmask = this.stream.readUInt32();

    return bitmask;
  }

  isFieldPresent(bitmask, position) {
    return (bitmask & (1 << position)) !== 0;
  }

  decodeCollection(schema) {
    const length = this.stream.readUInt16();
    let collection = [];
    for (let i = 0; i < length; i++) {
      const itemBitmask = this.stream.readUInt32();
      this.bitPosition = 0;
      collection.push(this.visitObject(schema));
    }
    return collection;
  }

  decodeField(type, fieldSchema) {

    switch (type) {
      case 'Int10':

        break;
      case 'UInt10':

        break;
      case 'UInt12':

        break;
      case 'UInt16':
        const valueUInt16 = this.stream.readUInt16();
        return valueUInt16;
      case 'UTF8String':

        let length = this.stream.readUInt8();
        let utf8Bytes = [];
        for (let i = 0; i < length; i++) {
          utf8Bytes.push(this.stream.readUInt8());
        }
        return Buffer.from(utf8Bytes).toString('utf8');
      case 'Enum':
        const enumIndex = this.stream.readUInt8();
        return this.getEnumKeyByValue(fieldSchema.enum, enumIndex);
      case 'Boolean':
        const valueBoolean = this.stream.readUInt8();
        return valueBoolean === 1;
      case 'Int16':
        const valueInt16 = this.stream.readInt16();
        return valueInt16;
      case 'Int32':
        const valueInt32 = this.stream.readInt32();
        return valueInt32;
      case 'Float64':
        const valueFloat64 = this.stream.readFloat64();
        return valueFloat64;
      case 'ASCIIString':
        const lengthAscii = this.stream.readUInt8();
        const valueAscii = this.stream.toString('ascii', lengthAscii);
        return valueAscii;

      default:
        throw new Error(`Unrecognized field type: ${type}`);
    }

  }

  getEnumKeyByValue(enumObj, value) {

    if (!this.enumCache.has(enumObj)) {
      this.enumCache.set(enumObj, new Map());
    }

    let enumValueCache = this.enumCache.get(enumObj);

    if (enumValueCache.has(value)) {
      return enumValueCache.get(value);
    }

    const key = Object.keys(enumObj).find(key => enumObj[key] === value);
    enumValueCache.set(value, key);
    return key;
  }

  decode(schema) {

    return this.visitObject(schema);
  }

}

export default DecodingVisitor;