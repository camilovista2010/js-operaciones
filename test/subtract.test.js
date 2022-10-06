const subtraction = require("./../lib/operations/subtract");

describe('subtraction module', () => {
  test('adds 1 - 2 to equal 1', () => {
    expect(subtraction(1, 2)).toBe(-1);
  });
 
});