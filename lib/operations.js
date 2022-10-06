var sum = require('./operations/sum');
var divide = require('./operations/divide');
var multiply = require('./operations/multiply');
var subtract = require('./operations/subtract');

var operation = { 
    sum,
    divide,
    multiply,
    subtract
}

module.exports = operation