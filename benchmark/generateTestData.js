import fs from 'fs';

// Function to generate a player with random data

// Function to generate a player with random data
function generateRandomPlayer(id, name, type) {
  return {
    id,
    name,
    type,
    position: { x: Math.floor(Math.random() * 100) * 10000, y: Math.floor(Math.random() * 100)  * 10000},
    velocity: { x: Math.floor(Math.random() * 100)  * 10000, y: Math.floor(Math.random() * 100)  * 10000 },
    width: Math.floor(Math.random() * 100)  * 10000,
    height: Math.floor(Math.random() * 100)  * 10000,
    rotation: Math.floor(Math.random() * 360)  * 10000,
    mass: Math.floor(Math.random() * 1000)  * 1000,
    health: Math.floor(Math.random() * 100)  * 1000,
    depth:  Math.floor(Math.random() * 100) * 1000,
    lifetime: Math.floor(Math.random() * 1000) * 1000,
    radius:  Math.floor(Math.random() * 100) * 1000,
    isSensor: Math.random() < 0.5,
    isStatic: Math.random() < 0.5,
    destroyed: Math.random() < 0.5,
    owner: Math.floor(Math.random() * 10),
    maxSpeed: Math.floor(Math.random() * 100) * 1000
  };
}

// Function to generate test data
function generateTestData(iterations) {
  let testData = [];

  for (let i = 0; i < iterations; i++) {
    let players = [];
    for (let j = 0; j < 10; j++) {
      players.push(generateRandomPlayer(j + 1, 'Player' + (j + 1), 'PLAYER'));
    }

    testData.push({
      id: i,
      state: players
    });
  }

  fs.writeFileSync('testData.json', JSON.stringify(testData, true, 2));
  console.log('Test data generated and saved to testData.json');
}

generateTestData(1000);
