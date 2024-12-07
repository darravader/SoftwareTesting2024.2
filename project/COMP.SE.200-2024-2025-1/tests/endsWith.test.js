import { expect } from 'chai'; // Import Chai for assertions
import endsWith from '../src/endsWith.js'; // Adjust the import path as necessary

describe('endsWith', () => {
  it('should return true if the string ends with the target', () => {
    expect(endsWith('abc', 'c')).to.be.true;
  });

  it('should return false if the string does not end with the target', () => {
    expect(endsWith('abc', 'b')).to.be.false;
  });

  it('should respect the position parameter when provided', () => {
    expect(endsWith('abc', 'b', 2)).to.be.true;
    expect(endsWith('abc', 'c', 2)).to.be.false;
  });

  it('should handle empty strings and targets', () => {
    expect(endsWith('', '')).to.be.true; // Both string and target are empty
    expect(endsWith('abc', '')).to.be.true; // Empty target
    expect(endsWith('', 'a')).to.be.false; // Empty string with non-empty target
  });

  it('should handle cases where position is out of bounds', () => {
    expect(endsWith('abc', 'c', 5)).to.be.true; // Position greater than string length
    expect(endsWith('abc', 'a', -1)).to.be.false; // Negative position
  });

  it('should handle non-string inputs gracefully', () => {
    expect(endsWith('abc', null)).to.be.false; // Null target
    expect(endsWith(null, 'a')).to.be.false; // Null string
    expect(endsWith('abc', 123)).to.be.false; // Non-string target
  });

  it('should handle edge cases with position being NaN', () => {
    expect(endsWith('abc', 'c', NaN)).to.be.true; // NaN position defaults to string length
  });

  it('should handle cases where target is longer than the string', () => {
    expect(endsWith('abc', 'abcd')).to.be.false;
  });

  it('should handle strings with special characters', () => {
    expect(endsWith('hello!', '!')).to.be.true;
    expect(endsWith('12345$', '$')).to.be.true;
    expect(endsWith('test-string', 'string')).to.be.true;
  });
});
