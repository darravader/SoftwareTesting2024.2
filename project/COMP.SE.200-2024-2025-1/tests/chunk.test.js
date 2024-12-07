import { expect } from 'chai'; // Import Chai for assertions
import chunk from '../src/chunk.js'; // Adjust the import path as necessary

describe('chunk', () => {
  it('should split an array into chunks of the specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });

  it('should return an array with one chunk if size is greater than the array length', () => {
    expect(chunk(['a', 'b', 'c'], 5)).to.deep.equal([['a', 'b', 'c']]);
  });

  it('should handle size of 1 correctly', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 1)).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
  });

  it('should handle size of 0 by returning an empty array', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 0)).to.deep.equal([]);
  });

  it('should return an empty array if size is negative', () => {
    expect(chunk(['a', 'b', 'c', 'd'], -2)).to.deep.equal([]);
  });

  it('should handle null or undefined arrays gracefully', () => {
    expect(chunk(null, 2)).to.deep.equal([]);
    expect(chunk(undefined, 2)).to.deep.equal([]);
  });

  it('should handle non-integer sizes by converting them to integers', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2.5)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], '2')).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });

  it('should handle non-array inputs by returning an empty array', () => {
    expect(chunk(123, 2)).to.deep.equal([]);
    expect(chunk('abcd', 2)).to.deep.equal([]);
  });

  it('should handle a size of `Infinity` by returning the entire array as a single chunk', () => {
    expect(chunk(['a', 'b', 'c', 'd'], Infinity)).to.deep.equal([['a', 'b', 'c', 'd']]);
  });
});
