// test/isEmpty.test.js

import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js'; 

describe('isEmpty function', () => {
  it('should return true for null or undefined', () => {
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
  });

  it('should return true for primitive values that are not objects or collections', () => {
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty(false)).to.be.true;
    expect(isEmpty(0)).to.be.true;
    expect(isEmpty(1)).to.be.true;
    expect(isEmpty('')).to.be.true;
  });

  it('should return false for non-empty strings', () => {
    expect(isEmpty('abc')).to.be.false;
    expect(isEmpty(' ')).to.be.false; // Whitespace is not considered empty
  });

  it('should return true for empty arrays and false for non-empty arrays', () => {
    expect(isEmpty([])).to.be.true;
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  it('should return true for empty objects and false for objects with properties', () => {
    expect(isEmpty({})).to.be.true;
    expect(isEmpty({ a: 1 })).to.be.false;
  });

  it('should return true for empty maps and sets and false for non-empty ones', () => {
    const emptyMap = new Map();
    const nonEmptyMap = new Map([['key', 'value']]);
    const emptySet = new Set();
    const nonEmptySet = new Set([1, 2, 3]);

    expect(isEmpty(emptyMap)).to.be.true;
    expect(isEmpty(nonEmptyMap)).to.be.false;
    expect(isEmpty(emptySet)).to.be.true;
    expect(isEmpty(nonEmptySet)).to.be.false;
  });

  it('should return true for empty array-like objects and false for non-empty ones', () => {
    const argumentsObj = (function() { return arguments; })();
    const buffer = Buffer.alloc(0);
    const typedArray = new Uint8Array(0);

    expect(isEmpty(argumentsObj)).to.be.true;
    expect(isEmpty(buffer)).to.be.true;
    expect(isEmpty(typedArray)).to.be.true;
  });

  it('should return false for non-empty array-like objects', () => {
    const argumentsObj = (function() { return arguments; })(1, 2, 3);
    const buffer = Buffer.from([1, 2, 3]);
    const typedArray = new Uint8Array([1, 2, 3]);

    expect(isEmpty(argumentsObj)).to.be.false;
    expect(isEmpty(buffer)).to.be.false;
    expect(isEmpty(typedArray)).to.be.false;
  });

  it('should return true for objects without own enumerable properties (like prototypes)', () => {
    function Prototype() {}
    Prototype.prototype.someMethod = function() {};
    const instance = new Prototype();

    expect(isEmpty(instance)).to.be.true;
  });

  it('should return true for objects with no own properties even if inherited properties exist', () => {
    const object = Object.create({ inherited: true });
    expect(isEmpty(object)).to.be.true;
  });
});
