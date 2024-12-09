// test/filter.test.js

import { expect } from 'chai';
import filter from '../src/filter.js'; 

describe('filter function', () => {
  it('should filter elements based on the predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ user: 'barney', active: true }]);
  });

  it('should return an empty array if no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (n) => n > 10);
    expect(result).to.deep.equal([]);
  });

  it('should return all elements if the predicate always returns true', () => {
    const numbers = [1, 2, 3];
    const result = filter(numbers, () => true);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should return an empty array when filtering an empty array', () => {
    const result = filter([], (n) => n > 0);
    expect(result).to.deep.equal([]);
  });

  it('should handle arrays with various data types', () => {
    const mixed = [1, 'two', { three: 3 }, null, undefined];
    const result = filter(mixed, (item) => typeof item === 'string');
    expect(result).to.deep.equal(['two']);
  });

  it('should pass the correct arguments to the predicate', () => {
    const array = [10, 20, 30];
    const predicateSpy = (value, index, arr) => {
      expect(arr).to.equal(array);
      expect(value).to.equal(array[index]);
      return true;
    };

    filter(array, predicateSpy);
  });

  it('should return an empty array if the input is null or undefined', () => {
    expect(filter(null, () => true)).to.deep.equal([]);
    expect(filter(undefined, () => true)).to.deep.equal([]);
  });
});
