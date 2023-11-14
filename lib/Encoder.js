class Encoder {
  constructor(decorators) {
    this.decorators = decorators;
  }

  encode(schema, data) {
    let encodedData = data;
    for (const decorator of this.decorators) {
      encodedData = decorator.encode(encodedData, schema);
    }
    return encodedData;
  }

  decode(schema, data) {
    let decodedData = data;
    for (const decorator of this.decorators) {
      if (typeof decorator.decode === 'function') {
        decodedData = decorator.decode(decodedData, schema);
      }
    }
    return decodedData;
  }
}

export default Encoder;