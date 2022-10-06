var lodash = require("lodash"); 

/**
 * sum of the values in `array`.
 *
 * @category operations
 * @param {Array} arrNumber 
 * @returns {number} Returns the sum.
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
function sum(arrNumber) {
    return lodash.sum(arrNumber);
} 

module.exports =  sum;