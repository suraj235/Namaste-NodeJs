// Modules protects the variables and functions from being accessed outside this file.
const morningGreet = require('./morning');
const nightGreet = require('./night');

const a = 'Hello, this is greeting.js!';

module.exports = { a, morningGreet, nightGreet };
