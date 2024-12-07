import { expect } from 'chai'; // Import Chai for assertions
import upperFirst from '../src/upperFirst.js'; // Adjust the import path as necessary

describe('upperFirst', () => {
  it('should convert the first character of a lowercase string to uppercase', () => {
    expect(upperFirst('fred')).to.equal('Fred');
  });

  it('should leave the first character uppercase if it already is', () => {
    expect(upperFirst('FRED')).to.equal('FRED');
  });

  it('should handle strings with only one character', () => {
    expect(upperFirst('f')).to.equal('F');
    expect(upperFirst('F')).to.equal('F');
  });

  it('should handle empty strings', () => {
    expect(upperFirst('')).to.equal('');
  });

  it('should handle strings with special characters as the first character', () => {
    expect(upperFirst('$hello')).to.equal('$hello');
    expect(upperFirst('1world')).to.equal('1world');
  });

  it('should handle non-string inputs gracefully', () => {
    expect(upperFirst(null)).to.equal('');
    expect(upperFirst(undefined)).to.equal('');
    expect(upperFirst(123)).to.equal('123');
    expect(upperFirst(true)).to.equal('True');
    expect(upperFirst(false)).to.equal('False');
  });
});