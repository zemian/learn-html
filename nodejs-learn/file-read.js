const fs = require('fs');
const sampleFile = "readme.md";

// NOTE: There is sync and async (default) version of the methods!

function example1() {
    // == Read entire text into string
    fs.readFile(sampleFile, 'utf-8', (err, data) => {
        console.log(typeof data);
        console.log(data.length);
    });
}

function example2() {
    // == Read file sync and split into lines
    console.log("== example");
    let lines = fs.readFileSync(sampleFile).toString().split("\n");
    for (let [i, line] of lines.entries()) {
        console.log(`Line# ${i + 1}: ${line}`);
    }
}

// Tests
example2();
