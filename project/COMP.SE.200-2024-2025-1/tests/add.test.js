// test/add.test.js

import { expect } from 'chai';
import add from 'project/COMP.SE.200-2024-2025-1/src/add.js';  // Make sure the import path is correct based on where your add function is located

describe('add function', () => {
  it('should add two numbers correctly', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);  // Assertion that 6 + 4 = 10
  });

  it('should return 0 when adding 0 to a number', () => {
    const result = add(0, 5);
    expect(result).to.equal(5);  // 0 + 5 = 5
  });

  it('should return a negative number when adding a negative number', () => {
    const result = add(-6, 4);
    expect(result).to.equal(-2);  // -6 + 4 = -2
  });
});
