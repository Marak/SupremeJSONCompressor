# The Supreme JSON Compressor™ 

### ALPHA NOTICE

**Status**: 

We've achieved smaller compression sizes than ProtoBuf; however, to beat CPU times, we need to complete the code generators for encoders/decoders. This works because we have a script that parses a schema and generates a tailor-made encoder/decoder that is hard-coded and optimized for that specific schema. I've started work on the code gen tools [here](https://github.com/yantra-core/SupremeJSONCompressor/blob/master/examples/codegen-visitor.js) if anyone is interested in working on this.

We are still using Protobuf in production for Mantra and look forward to using The Supreme JSON Compressor™ in the future once we complete the code-gen tools.

<hr/>

The Supreme JSON Compressor™  is the world's best JSON Compressor / Decompressor.

Why? I will tell you.

 - It is the most theoretically possible optimal compression in JavaScript
 - It has better compression than Google ProtoBufs
 - It has support for nested Records and Collections
 - It has support for optional fields
 - It writes at the bit level


The Supreme JSON Compressor™ is Alpha v1 software; however, The Supreme JSON Compressor™ already compresses more efficiently than Google Protobuf. YMMV, data compression is not a one-size-fits-all solution.

The Supreme JSON Compressor™ works well for us; there is room for further optimizations.


## Google ProtoBuf vs The Supreme JSON Compressor™

```js

node protobuf-benchmark.js
Average Encoding Time: 0.04ms
Average Decoding Time: 0.05ms
Average Size per Encoded Message: 828.50 bytes

node supreme-benchmark.js
Average Encoding Time: 0.49ms
Average Decoding Time: 0.09ms
Average Size per Encoded Message: 809.00 bytes

```

You can see that `809.00 bytes` is smaller than `828.50 bytes`. Even at an unoptimized v1 Alpha status, The Supreme JSON Compressor™ compresses our game's snapshot data more tightly than ProtoBuf. The Supreme JSON Compressor™ currently lags behind Google ProtoBuf in encoding time, but we can optimize this later.
 
## Data Types

| Data Type        | Description                                   | Range or Notes                                 |
|------------------|-----------------------------------------------|-----------------------------------------------|
| Null             | Represents a null value                       | -                                             |
| Boolean          | Represents a boolean value (true/false)       | -                                             |
| UInt2            | Unsigned integer                              | 0 to 3                                        |
| UInt3            | Unsigned integer                              | 0 to 7                                        |
| UInt4            | Unsigned integer                              | 0 to 15                                       |
| UInt5            | Unsigned integer                              | 0 to 31                                       |
| UInt6            | Unsigned integer                              | 0 to 63                                       |
| UInt7            | Unsigned integer                              | 0 to 127                                      |
| UInt8            | Unsigned integer                              | 0 to 255                                      |
| UInt9            | Unsigned integer                              | 0 to 511                                      |
| UInt10           | Unsigned integer                              | 0 to 1023                                     |
| UInt11           | Unsigned integer                              | 0 to 2047                                     |
| UInt12           | Unsigned integer                              | 0 to 4095                                     |
| UInt16           | Unsigned integer                              | 0 to 65,535                                   |
| UInt32           | Unsigned integer (32-bit)                     | 0 to 4,294,967,295                            |
| Int4             | Signed integer                                | -8 to 7                                       |
| Int6             | Signed integer                                | -32 to 31                                     |
| Int8             | Signed integer                                | -128 to 127                                   |
| Int10            | Signed integer                                | -512 to 511                                   |
| Int16            | Signed integer                                | -32,768 to 32,767                             |
| Int32            | Signed integer (32-bit)                       | -2,147,483,648 to 2,147,483,647               |
| Float32          | 32-bit floating-point number                  | Approximately ±1.5 × 10^-45 to ±3.4 × 10^38   |
| Float64          | 64-bit floating-point number                  | Approximately ±5.0 × 10^-324 to ±1.8 × 10^308 |
| EntityId         | Represents an entity identifier               | -                                             |
| Rotation8        | Represents a rotation value with 8-bit precision | -                                          |
| ASCIIString      | Represents an ASCII string                    | -                                             |
| UTF8String       | Represents a UTF-8 encoded string             | -                                             |
| RGB888           | Represents an RGB color with 24-bit color depth | -                                           |
| RotationFloat32  | Represents a rotation value with 32-bit floating-point precision | -                          |


```js

const entityTypes = {
  'PLAYER': 0,
  'BULLET': 1,
  'BLOCK': 2,
  'BORDER': 3,
  'BODY': 4
};

const playerSchema = {
  id: { type: 'UInt16' },
  name: { type: 'UTF8String' },
  type: { type: 'Enum', enum: entityTypes },
  position: {
    type: 'Record',
    schema: {
      x: { type: 'Int32' },
      y: { type: 'Int32' }
    }
  },
  velocity: {
    type: 'Record',
    schema: {
      x: { type: 'Int32' },
      y: { type: 'Int32' }
    }
  },
  width: { type: 'Int32' },
  height: { type: 'Int32' },
  rotation: { type: 'Int32' },
  mass: { type: 'Int32' },
  health: { type: 'Int32' },
  depth: { type: 'Float64' },
  lifetime: { type: 'Int32' },
  radius: { type: 'Float64' },
  isSensor: { type: 'Boolean' },
  isStatic: { type: 'Boolean' },
  destroyed: { type: 'Boolean' },
  owner: { type: 'UInt16' },
  maxSpeed: { type: 'Int32' }
};

const snapshotSchema = {
  id: { type: 'UInt16' },
  state: {
    type: 'Collection',
    schema: playerSchema
  }
}

let players = [
  {
    id: 1,
    name: 'Bunny',
    type: 'PLAYER',
    position: { x: 10, y: 20 },
    velocity: { x: 1, y: 1 },
    width: 100,
    height: 100,
    rotation: 0,
    mass: 100,
    health: 100,
    depth: 10,
    lifetime: 1000,
    radius: 100,
    isSensor: true,
    isStatic: true,
    destroyed: true,
    owner: 0,
    maxSpeed: 100,
  },
  {
    id: 2,
    name: 'Turtle',
    type: 'BLOCK',
    rotation: 157
  },
  {
    id: 3,
    name: 'Turtle',
    type: 'PLAYER',
    rotation: 314
  }
];

let snapshot = {
  id: 123,
  state: players
};

let encoded = api.encode(snapshotSchema, snapshot);
console.log('encoded', encoded)

let decoded = api.decode(snapshotSchema, encoded);
console.log('decoded', decoded)
```


# Alterate Options
In pursuit of having to not want to make The Supreme JSON Compressor™ , I evaluated other less supreme options.

Please feel free to use these alternative options in your pursuit of compressed JSON:

### msgpack / gzip / etc / untyped / schema-less compressions

These are different from the solutions we are looking for. We can achieve much higher compression by explicitly providing schema to the client and server for all of our data with binary types. 

### possible analogs

 - https://github.com/phretaddin/schemapack
 - https://github.com/colyseus/schema

`phretaddin/schemapack` is closer solution; however it does not support optional fields or collections of records. Even with record support, not having optional fields means we have to send entire message on each request ( which is too much data )

`colyseus/schema` is a possible option; however, code is tightly coupled to colyseus framework and without Visitor pattern extension is difficult. It may have support for nested collections? `colyseus` has a lot of [open issues](https://github.com/colyseus/schema/issues) that look important. `colyseus/schema` is a TypeScript library; while this is neat, there are no literal compression benefits from using TypeScript, so it only adds more complexity to the problem.

### ProtoBuf / AVRO / etc

ProtoBuf and Apache AVRO are great technologies; however these universal encoding solutions provide second-class support and tooling to Javascript. I have reviewed all available implementations of Protobuf and AVRO in JS Land, none of them are great or can intuitively support the smaller custom binary types. It will always be possible to get better compression through custom binary codec.

### License
AGPL