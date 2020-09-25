// The three major APIs from chai are: assert, expect, and should

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should(); //actually call the function

assert.strictEqual('abc'.toUpperCase(), 'ABC');
expect('abc'.toUpperCase()).to.equal('ABC');
'abc'.toUpperCase().should.equal('ABC');
