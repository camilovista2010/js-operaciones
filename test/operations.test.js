const operations = require("./../lib/operations");

describe('operations module', () => {
  test('operations sum adds array [ 1 , 2 ] to equal 3', () => { 
    expect(operations.sum([ 1 , 2 ])).toBe(3);
  }); 
  
  test('operations multiply adds dividend 1 , divisor 2 to equal 2', () => {
    expect(operations.multiply( 1 , 2 )).toEqual(2);
  });
 
  test('operations subtract adds minuend 1 , subtrahend 2 to equal 1', () => {
    expect(operations.subtract(1 , 2 )).toEqual(-1);
  });

  test('operations divide adds dividend 2 , divisor 2 to equal 1', () => {
    expect(operations.divide(2 , 2 )).toEqual(1);
  });

});