// source: schema.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.Player', null, global);
goog.exportSymbol('proto.Position', null, global);
goog.exportSymbol('proto.Snapshot', null, global);
goog.exportSymbol('proto.Velocity', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Position.displayName = 'proto.Position';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Velocity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Velocity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Velocity.displayName = 'proto.Velocity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Player = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Player, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Player.displayName = 'proto.Player';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Snapshot.repeatedFields_, null);
};
goog.inherits(proto.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Snapshot.displayName = 'proto.Snapshot';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Position}
 */
proto.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Position;
  return proto.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Position}
 */
proto.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.Position.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Position} returns this
 */
proto.Position.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.Position.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Position} returns this
 */
proto.Position.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Velocity.prototype.toObject = function(opt_includeInstance) {
  return proto.Velocity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Velocity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Velocity.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Velocity}
 */
proto.Velocity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Velocity;
  return proto.Velocity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Velocity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Velocity}
 */
proto.Velocity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Velocity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Velocity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Velocity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Velocity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.Velocity.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Velocity} returns this
 */
proto.Velocity.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.Velocity.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Velocity} returns this
 */
proto.Velocity.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Player.prototype.toObject = function(opt_includeInstance) {
  return proto.Player.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Player} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Player.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    position: (f = msg.getPosition()) && proto.Position.toObject(includeInstance, f),
    velocity: (f = msg.getVelocity()) && proto.Velocity.toObject(includeInstance, f),
    width: jspb.Message.getFieldWithDefault(msg, 6, 0),
    height: jspb.Message.getFieldWithDefault(msg, 7, 0),
    rotation: jspb.Message.getFieldWithDefault(msg, 8, 0),
    mass: jspb.Message.getFieldWithDefault(msg, 9, 0),
    health: jspb.Message.getFieldWithDefault(msg, 10, 0),
    depth: jspb.Message.getFieldWithDefault(msg, 11, 0),
    lifetime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    radius: jspb.Message.getFieldWithDefault(msg, 13, 0),
    issensor: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    isstatic: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    destroyed: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    owner: jspb.Message.getFieldWithDefault(msg, 17, 0),
    maxspeed: jspb.Message.getFieldWithDefault(msg, 18, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Player}
 */
proto.Player.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Player;
  return proto.Player.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Player} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Player}
 */
proto.Player.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.Position;
      reader.readMessage(value,proto.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 5:
      var value = new proto.Velocity;
      reader.readMessage(value,proto.Velocity.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRotation(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMass(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHealth(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepth(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLifetime(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRadius(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssensor(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsstatic(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDestroyed(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOwner(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxspeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Player.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Player.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Player} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Player.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Position.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.Velocity.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getRotation();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getMass();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getDepth();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLifetime();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getRadius();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getIssensor();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIsstatic();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getDestroyed();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getOwner();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getMaxspeed();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Player.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.Player.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.Player.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Position position = 4;
 * @return {?proto.Position}
 */
proto.Player.prototype.getPosition = function() {
  return /** @type{?proto.Position} */ (
    jspb.Message.getWrapperField(this, proto.Position, 4));
};


/**
 * @param {?proto.Position|undefined} value
 * @return {!proto.Player} returns this
*/
proto.Player.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Player.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Velocity velocity = 5;
 * @return {?proto.Velocity}
 */
proto.Player.prototype.getVelocity = function() {
  return /** @type{?proto.Velocity} */ (
    jspb.Message.getWrapperField(this, proto.Velocity, 5));
};


/**
 * @param {?proto.Velocity|undefined} value
 * @return {!proto.Player} returns this
*/
proto.Player.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Player.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 width = 6;
 * @return {number}
 */
proto.Player.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 height = 7;
 * @return {number}
 */
proto.Player.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 rotation = 8;
 * @return {number}
 */
proto.Player.prototype.getRotation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setRotation = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 mass = 9;
 * @return {number}
 */
proto.Player.prototype.getMass = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setMass = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 health = 10;
 * @return {number}
 */
proto.Player.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 depth = 11;
 * @return {number}
 */
proto.Player.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 lifetime = 12;
 * @return {number}
 */
proto.Player.prototype.getLifetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setLifetime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 radius = 13;
 * @return {number}
 */
proto.Player.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setRadius = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool isSensor = 14;
 * @return {boolean}
 */
proto.Player.prototype.getIssensor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setIssensor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool isStatic = 15;
 * @return {boolean}
 */
proto.Player.prototype.getIsstatic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setIsstatic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool destroyed = 16;
 * @return {boolean}
 */
proto.Player.prototype.getDestroyed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setDestroyed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional int32 owner = 17;
 * @return {number}
 */
proto.Player.prototype.getOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setOwner = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 maxSpeed = 18;
 * @return {number}
 */
proto.Player.prototype.getMaxspeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.Player} returns this
 */
proto.Player.prototype.setMaxspeed = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Snapshot.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Snapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stateList: jspb.Message.toObjectList(msg.getStateList(),
    proto.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Snapshot}
 */
proto.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Snapshot;
  return proto.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Snapshot}
 */
proto.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.Player;
      reader.readMessage(value,proto.Player.deserializeBinaryFromReader);
      msg.addState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Snapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Snapshot.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Snapshot} returns this
 */
proto.Snapshot.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Player state = 2;
 * @return {!Array<!proto.Player>}
 */
proto.Snapshot.prototype.getStateList = function() {
  return /** @type{!Array<!proto.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Player, 2));
};


/**
 * @param {!Array<!proto.Player>} value
 * @return {!proto.Snapshot} returns this
*/
proto.Snapshot.prototype.setStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Player}
 */
proto.Snapshot.prototype.addState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Snapshot} returns this
 */
proto.Snapshot.prototype.clearStateList = function() {
  return this.setStateList([]);
};


goog.object.extend(exports, proto);
