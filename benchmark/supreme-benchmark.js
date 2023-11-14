import { performance } from 'perf_hooks';
import fs from 'fs';

import api from "../lib/index.js";
import snapshotSchema from "../test/fixtures/testSchema.js";

// Function to run benchmark
function runBenchmark() {
  // Read test data from disk
  let testData = JSON.parse(fs.readFileSync('testData.json', 'utf8'));

  let totalEncodeTime = 0;
  let totalDecodeTime = 0;
  let totalSize = 0;

  // console.time('Total Benchmark Test');

  testData.forEach(snapshot => {
    let startEncode = performance.now();
    let encoded = api.encode(snapshotSchema, snapshot);
    totalEncodeTime += performance.now() - startEncode;
    totalSize += encoded.byteLength;

    let startDecode = performance.now();
    api.decode(snapshotSchema, encoded); // Decoding process
    totalDecodeTime += performance.now() - startDecode;
  });

  // console.timeEnd('Total Benchmark Test');

  console.log(`Average Encoding Time: ${(totalEncodeTime / testData.length).toFixed(2)}ms`);
  console.log(`Average Decoding Time: ${(totalDecodeTime / testData.length).toFixed(2)}ms`);
  console.log(`Average Size per Encoded Message: ${(totalSize / testData.length).toFixed(2)} bytes`);
}

runBenchmark();
