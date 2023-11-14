const fs = require('fs');
const { performance } = require('perf_hooks');
const Schema = require('./schema_pb.js');

// Assuming testData.json is in the same directory as your script
const testData = JSON.parse(fs.readFileSync('../testData.json', 'utf8'));

// Benchmark function
function runBenchmark() {
    let totalEncodeTime = 0;
    let totalDecodeTime = 0;
    let totalSize = 0;

    testData.forEach(testItem => {
        let snapshot = new Schema.Snapshot();
        snapshot.setId(testItem.id);

        testItem.state.forEach(playerData => {
            let player = new Schema.Player();
            player.setId(playerData.id);
            player.setName(playerData.name);
            player.setType(playerData.type);

            let position = new Schema.Position();
            position.setX(playerData.position.x);
            position.setY(playerData.position.y);
            player.setPosition(position);

            let velocity = new Schema.Velocity();
            velocity.setX(playerData.velocity.x);
            velocity.setY(playerData.velocity.y);
            player.setVelocity(velocity);

            // Set the rest of the properties
            player.setWidth(playerData.width);
            player.setHeight(playerData.height);
            player.setRotation(playerData.rotation);
            player.setMass(playerData.mass);
            player.setHealth(playerData.health);
            player.setDepth(playerData.depth);
            player.setLifetime(playerData.lifetime);
            player.setRadius(playerData.radius);
            player.getIssensor(playerData.isSensor);
            player.setIsstatic(playerData.isStatic);
            player.setDestroyed(playerData.destroyed);
            player.setOwner(playerData.owner);
            player.setMaxspeed(playerData.maxSpeed);

            snapshot.addState(player);
        });

        let startEncode = performance.now();
        let encoded = snapshot.serializeBinary();
        totalEncodeTime += performance.now() - startEncode;
        totalSize += encoded.length;

        let startDecode = performance.now();
        Schema.Snapshot.deserializeBinary(encoded);
        totalDecodeTime += performance.now() - startDecode;
    });

    // console.log(`Total Encoding Time: ${totalEncodeTime}ms`);
    console.log(`Average Encoding Time: ${(totalEncodeTime / testData.length).toFixed(2)}ms`);
    // console.log(`Total Decoding Time: ${totalDecodeTime}ms`);
    console.log(`Average Decoding Time: ${(totalDecodeTime / testData.length).toFixed(2)}ms`);
    console.log(`Average Size per Encoded Message: ${(totalSize / testData.length).toFixed(2)} bytes`);
}

runBenchmark();
