const entityTypes = {
  'PLAYER': 0,
  'BULLET': 1,
  'BLOCK': 2,
  'BORDER': 3,
  'BODY': 4
  // ... other types
};

const _schema = {
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
  rotation: { type: 'Int16' }, // TODO: special case with radians->bytes optimization
  mass: { type: 'Int32' },
  health: { type: 'Int16' },
  depth: { type: 'Int32' },
  lifetime: { type: 'Int32' },
  radius: { type: 'Int32' },
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
    schema: _schema
  }
}

export default snapshotSchema;