/*

  CLOSE TO WORKING
  NEEDS TO KEEP BETTER TRACK OF CURRENT BITPOSITION

*/

import snapshotSchema from "../test/fixtures/testSchema.js";
import api from "../lib/index.js";
import BitStream from "../binary/BitStream.js";
import fs from "fs";
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

function sortSchema(schema) {
  if (typeof schema !== 'object' || schema === null) {
    return schema;
  }

  const sortedSchema = {};
  Object.keys(schema).sort().forEach(key => {
    sortedSchema[key] = sortSchema(schema[key]); // Sort nested objects
  });

  return sortedSchema;
}



function visitSchema(schema, visitorFunction, path = '') {
  codegen.depth++;
  visitorFunction(schema, path);

  for (let key in schema) {
    if (schema.hasOwnProperty(key)) {
      let prop = schema[key];
      let currentPath = path ? `${path}/${key}` : key;

      if (typeof prop === 'object' && prop !== null) {
        visitSchema(prop, visitorFunction, currentPath);
      }
    }
  }
  codegen.depth--;
}





let codegen = {};
codegen.output = '';
codegen.fieldPosition = 0;
codegen.real = {};
codegen.init = function initCodeGen() {

  codegen.output += `// Base Decoder class
const decoder = {};
const reader = {};
const stream = new BitStream(buffer);
function isFieldPresent(bitmask, position) {
  return (bitmask & (1 << position)) !== 0;
}`
};

codegen.readBitmask = function readBitmask() {
  codegen.output += `let bitmask = stream.readUInt32()\n`;
  codegen.output += `console.log('readBitmask', bitmask.toString(2))\n`;
  codegen.output += `console.log('OFFSET', stream.offset)\n`;

}

codegen.preRun = function preRun() {
  codegen.output += `console.log(decoder);\n`
  // first OP, read the initial bitmask to get us started
  //codegen.output += `let bitmask;\n`;

  codegen.readBitmask();
}

codegen.readBuffer = function readBuffer() {
  codegen.output += `
  // start to read the buffer now
  console.log(buffer);
  `

}

codegen.end = function () {
  codegen.output += `console.log(reader);\n`
  codegen.output += `console.log(reader.state);\n`

}

codegen.generateReturnType = function (node) {
  let output = '';
  switch (node.type) {
    case 'Boolean':
      output += `    const valueBoolean = stream.readUInt8();`;
      output += `    return valueBoolean === 1;`;
      break;
    case 'Int32':
      output += `    return stream.readInt32();`;
      break;
    case 'Int16':
      output += `    return stream.readInt16();`;
      break;
    case 'UInt16':
      output += `    return stream.readUInt16();`;
      break;
    case 'UTF8String':
      output += `            \nlet length = stream.readUInt8();\n`;
      output += `            let utf8Bytes = [];\n`;
      output += `            for (let i = 0; i < length; i++) {\n`;
      output += `              utf8Bytes.push(stream.readUInt8());\n`;
      output += `            }\n`;
      output += `            return Buffer.from(utf8Bytes).toString('utf8');\n`;
      break;
    case 'Enum':
      output += `    const enumIndex = stream.readUInt8();`;
      output += `    return enumIndex;`;
      break;
    case 'Record':
      // do nothing?
      break;
    case 'Collection':
      // do nothing?
      break;


  }
  return output;

}

codegen.depth = 0;

codegen.newField = function newField(node, path) {
  let pathNoSchema = path;
  let position = codegen.fieldPosition;
  codegen.fieldPositions.push(codegen.fieldPosition);
//  codegen.fieldPosition = 0;

  this.output += `
    decoder['${pathNoSchema}'] = function (stream, bitmask) {
        ${this.generateReturnType(node)}
    };`

  codegen.fieldPosition++; // Correctly incrementing after processing a field
}



codegen.fieldPositions = [0]; // Array to hold field positions at each depth

codegen.newRecord = function newRecord(node, path) {
  // Push current field position to stack and reset it
  codegen.fieldPositions.push(codegen.fieldPosition);
  codegen.fieldPosition = 0;

  let pathNoSchema = path;
  this.output += `decoder['${pathNoSchema}'] = function (stream, parentBitmask) {
    if (!isFieldPresent(parentBitmask, ${codegen.fieldPositions.slice(-1)[0]})) {
      return null;
    }
    let recordBitmask = stream.readUInt32();

    let record = {};\n`;

  // Process each field in the record
  Object.keys(node.schema).forEach((key) => {
    this.output += `  if (isFieldPresent(recordBitmask, ${codegen.fieldPosition})) {
      record['${key}'] = decoder['${pathNoSchema}/schema/${key}'](stream, recordBitmask);\n`;
    this.output += `  }\n`;
    codegen.fieldPosition++; // Increment position for each field
  });

  this.output += `  return record;\n};\n`;

  // Restore the previous field position
  codegen.fieldPosition = codegen.fieldPositions.pop();
}


codegen.newCollection = function newCollection(node, path) {
  // Similar approach as `newRecord`
  codegen.fieldPositions.push(codegen.fieldPosition);
  codegen.fieldPosition = 0;

  let pathNoSchema = path;
  this.output += `
    if (!decoder['${pathNoSchema}']) {
      decoder['${pathNoSchema}'] = function (stream) {
        let collection = [];
        let length = stream.readUInt16();

        for (let i = 0; i < length; i++) {
          let itemBitmask = stream.readUInt32();
          let item = {};\n`;

  Object.keys(node.schema).forEach((key) => {
    this.output += `  if (isFieldPresent(itemBitmask, ${codegen.fieldPosition})) {
              item['${key}'] = decoder['${pathNoSchema}/schema/${key}'](stream, itemBitmask);\n`;
    this.output += `  }\n`;
    codegen.fieldPosition++;
  });

  this.output += `  collection.push(item);
        }
        return collection;
      };
    }\n`;

  codegen.fieldPosition = codegen.fieldPositions.pop();
}



// ... Rest of your codegen logic ...


codegen.newItemDecoder = function newItemDecoder(node, path) {
  // Logic to generate decoder function for each item in the collection
  // This depends on the structure of items in the collection
};

function myVisitorFunction(node, path) {
  if (path === '') {
    codegen.init();
    return;
  }

 // Skip generating code for any path that ends with '/schema'
 if (path.endsWith('/schema')) {
  return;
}

  // Check if the current node is a record, collection, or a specific path like 'state'
  if (node.type === 'Record' || node.type === 'Collection' || path === 'state') {
    if (node.type === 'Record') {
      codegen.newRecord(node, path);
    } else if (node.type === 'Collection') {
      codegen.newCollection(node, path);
    } else if (path === 'state') {
      // Handle 'state' specifically if needed
    }

    // Mark all fields within this structure as already processed
    if (typeof node.schema === 'object') {
      Object.keys(node.schema).forEach(key => {
        codegen.real[`${path}/${key}`] = true;
      });
    } else {
      codegen.real[path] = true;
    }
  } else {
    // Process field only if it has not been processed
    if (typeof codegen.real[path] === 'undefined') {
      codegen.newField(node, path);
    }
  }
}



function myParserVisitorFunction(node, path) {
  if (path === '') {
    return;
  }

 // Skip generating code for any path that ends with '/schema'
 if (path.endsWith('/schema')) {
  return;
}

  let pathNoSchema = path;
  switch (node.type) {
    case 'Record':
    case 'Collection':
      codegen.output += `    if (typeof reader['${pathNoSchema}'] === 'undefined') {
          reader['${pathNoSchema}'] = decoder['${pathNoSchema}'](stream, bitmask);
        }
      `;
      break;
    default:
      codegen.newRead(node, path);
      break;
  }
}

codegen.newRead = function newRead(node, path) {
  let pathNoSchema = path;
  console.log('nnnn', node)
  codegen.output += `    if (typeof reader['${pathNoSchema}'] === 'undefined') {
      reader['${pathNoSchema}'] = decoder['${pathNoSchema}'](stream, bitmask);
      console.log(reader['${pathNoSchema}']);
    }\n`;
};

const sortedSnapshotSchema = sortSchema(snapshotSchema);


// Call the visitor function on the schema
visitSchema(sortedSnapshotSchema, myVisitorFunction);
codegen.readBuffer();
codegen.preRun();
//visitSchema(sortedSnapshotSchema, myParserVisitorFunction);
codegen.end();


// console.log('sortSchema(snapshot)sortSchema(snapshot)sortSchema(snapshot)', sortSchema(snapshot));

snapshot.state = snapshot.state.sort();
let buffer = api.encode(snapshotSchema, snapshot);
//console.log('buffer', buffer);

//console.log(codegen.output)
fs.writeFileSync('output.js', codegen.output);


let fn = new Function('buffer', 'BitStream', codegen.output);
// console.log('AAAA', fn.toString());
fn(buffer, BitStream);

//console.log(JSON.stringify(snapshotSchema, true, 2));