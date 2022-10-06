var lodash = require("lodash"); 
/**
 * subtraction of two values.
 *
 * @category operations
 * @param {number} minuend 
 * @param {number} subtrahend 
 * @returns {number} Returns the divide. 
 */
 function subtraction(minuend , subtrahend ) {
    return lodash.subtract(minuend , subtrahend); 
} 
module.exports = subtraction; 