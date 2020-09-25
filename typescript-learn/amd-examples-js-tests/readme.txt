This folder contains NodeJS scripts to test JS files generated under "amd-examples"
using plain RequireJS as consumer.

Step1: compile all .ts files under "amd-examples"
  cd amd-examples
  tsc

Step2:
  cd amd-examples-js-tests
  npm install
  node my-export-assignment_test.js

