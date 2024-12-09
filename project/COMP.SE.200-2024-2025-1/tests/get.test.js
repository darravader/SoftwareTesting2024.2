// test/get.test.js

import { expect } from 'chai';
import get from '../src/get.js'; 

describe('get function', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should retrieve a nested value using a string path', () => {
    const result = get(object, 'a[0].b.c');
    expect(result).to.equal(3); // 'a[0].b.c' resolves to 3
  });

  it('should retrieve a nested value using an array path', () => {
    const result = get(object, ['a', '0', 'b', 'c']);
    expect(result).to.equal(3); // ['a', '0', 'b', 'c'] resolves to 3
  });

  it('should return the default value if the resolved value is undefined', () => {
    const result = get(object, 'a.b.c', 'default');
    expect(result).to.equal('default'); // 'a.b.c' is undefined, so 'default' is returned
  });

  it('should return undefined if the path does not exist and no default value is provided', () => {
    const result = get(object, 'x.y.z');
    expect(result).to.be.undefined; // 'x.y.z' does not exist
  });

  it('should return undefined when the object is null or undefined', () => {
    const resultNull = get(null, 'a.b.c');
    const resultUndefined = get(undefined, 'a.b.c');
    expect(resultNull).to.be.undefined;
    expect(resultUndefined).to.be.undefined;
  });

  it('should work with empty paths', () => {
    const resultEmptyString = get(object, '');
    const resultEmptyArray = get(object, []);
    expect(resultEmptyString).to.be.undefined; // '' is not a valid path
    expect(resultEmptyArray).to.deep.equal(object); // [] resolves to the entire object
  });
});
