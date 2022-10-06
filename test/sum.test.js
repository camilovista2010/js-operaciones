const sum = require("./../lib/operations/sum");

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
  });

  test('invalid type value', () => {
    let resultSum = sum(["1", 2]);
    expect(typeof resultSum).not.toBe(Number);
  });
});