import { expect } from 'chai'; // Import Chai's assertion library
import toString from '../src/toString.js'; // Ensure the path is correct

describe('toString', () => {
  it('should return the string as is if the input is already a string', () => {
    expect(toString('hello')).to.equal('hello');
    expect(toString('')).to.equal('');
  });

  it('should handle null and undefined values', () => {
    expect(toString(null)).to.equal('');
    expect(toString(undefined)).to.equal('');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
    expect(toString(0)).to.equal('0');
  });

  it('should convert numbers to strings', () => {
    expect(toString(42)).to.equal('42');
    expect(toString(-42.5)).to.equal('-42.5');
  });

  it('should convert arrays to comma-separated strings', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
    expect(toString(['a', 'b', 'c'])).to.equal('a,b,c');
  });

  it('should recursively convert nested arrays to strings', () => {
    expect(toString([1, [2, [3, 4]]])).to.equal('1,2,3,4');
  });

  it('should handle symbols correctly', () => {
    const sym = Symbol('test');
    expect(toString(sym)).to.equal(sym.toString());
  });

  it('should handle other objects by converting them to strings', () => {
    const obj = { key: 'value' };
    expect(toString(obj)).to.equal('[object Object]');
  });

  it('should handle boolean values', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });
});
