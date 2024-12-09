// test/capitalize.test.js

import { expect } from 'chai';
import capitalize from '../src/capitalize.js'; 

describe('capitalize function', () => {
  it('should capitalize a lowercase string', () => {
    const result = capitalize('hello');
    expect(result).to.equal('Hello');
  });

  it('should capitalize an uppercase string', () => {
    const result = capitalize('WORLD');
    expect(result).to.equal('World');
  });

  it('should capitalize a mixed-case string', () => {
    const result = capitalize('jAvAsCrIpT');
    expect(result).to.equal('Javascript');
  });

  it('should handle an empty string', () => {
    const result = capitalize('');
    expect(result).to.equal('');
  });

  it('should handle non-string inputs by converting them to strings', () => {
    expect(capitalize(123)).to.equal('123');
    expect(capitalize(null)).to.equal('Null');
    expect(capitalize(undefined)).to.equal('Undefined');
    expect(capitalize({})).to.equal('[object Object]');
  });

  it('should handle a string with special characters', () => {
    const result = capitalize('!hello');
    expect(result).to.equal('!hello');
  });

  it('should handle a string with whitespace', () => {
    const result = capitalize('  hello');
    expect(result).to.equal('  hello');
  });
});
