var lodash = require("lodash"); 

/**
 * divide of two values.
 *
 * @category operations
 * @param {number} dividend 
 * @param {number} divisor 
 * @returns {number} Returns the divide. 
 */
function divide(dividend , divisor) {
    return lodash.divide(dividend , divisor); 
}

module.exports =  divide;