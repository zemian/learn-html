## About

Mocha - Test Runner Library
    https://mochajs.org/

## How to Setup

https://mochajs.org/#getting-started
    
## How to Run

  npm test

## Mocha Interfaces

Mocha's "interface" system allows developers to choose their style of DSL. Mocha has BDD, TDD, 
Exports, QUnit and Require-style interfaces.

- The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().
- The TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():
- The Exports interface is much like Mocha's predecessor expresso. The keys before, after, beforeEach, and afterEach 
  are special-cased, object values are suites, and function values are test-cases:
- The QUnit-inspired interface matches the "flat" look of QUnit, where the test suite title is simply defined before 
  the test-cases. Like TDD, it uses suite() and test(), but resembling BDD, it also contains before(), after(), 
  beforeEach(), and afterEach().

## Test directory

If you have nested folders in `test` directory, you need to invoke Mocha with `--recursive` option!

See test script in `package.json`.
