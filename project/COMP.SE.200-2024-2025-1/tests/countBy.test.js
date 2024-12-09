// test/countBy.test.js

import { expect } from 'chai';
import countBy from '../src/countBy.js'; 

describe('countBy function', () => {
  it('should count by a property returned by the iteratee', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false },
    ];

    const result = countBy(users, (value) => value.active);
    expect(result).to.deep.equal({ true: 2, false: 1 });
  });

  it('should count numbers based on even or odd', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = countBy(numbers, (n) => (n % 2 === 0 ? 'even' : 'odd'));
    expect(result).to.deep.equal({ odd: 3, even: 2 });
  });

  it('should count strings based on their length', () => {
    const strings = ['one', 'two', 'three', 'four'];
    const result = countBy(strings, (str) => str.length);
    expect(result).to.deep.equal({ 3: 2, 5: 1, 4: 1 });
  });

  it('should return an empty object for an empty collection', () => {
    const result = countBy([], (n) => n > 0);
    expect(result).to.deep.equal({});
  });

  it('should handle collections with mixed data types', () => {
    const mixed = [1, 'two', null, undefined, { key: 'value' }];
    const result = countBy(mixed, (value) => typeof value);
    expect(result).to.deep.equal({ number: 1, string: 1, object: 2, undefined: 1 });
  });

  it('should correctly handle objects as collections', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const result = countBy(obj, (n) => (n % 2 === 0 ? 'even' : 'odd'));
    expect(result).to.deep.equal({ odd: 2, even: 2 });
  });

  it('should work with an iteratee that always returns the same key', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = countBy(numbers, () => 'key');
    expect(result).to.deep.equal({ key: 5 });
  });

  it('should handle null or undefined collections gracefully', () => {
    expect(countBy(null, () => true)).to.deep.equal({});
    expect(countBy(undefined, () => true)).to.deep.equal({});
  });
});
