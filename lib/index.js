// The Supreme JSON Compressor™ - Marak Squires 2023
import Encoder from "./Encoder.js";
import DecodingVisitor from "./DecodingVisitor.js";
import EncodingVisitor from "./EncodingVisitor.js";

let api = {};

api.encode = function encode (schema, object) {
  const encodingVisitor = new EncodingVisitor();
  const rootBitmask = encodingVisitor.encode(object, schema);
  const bitBuffer = encodingVisitor.getBuffer();
  return bitBuffer;
};

api.decode = function decode (schema, bitBuffer) {
  let decodingVisitor = new DecodingVisitor(bitBuffer);
  let decoded = decodingVisitor.decode(schema);
  return decoded;  
}

api.Encoder = Encoder;

export default api;