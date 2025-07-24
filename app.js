const {a, morningGreet, nightGreet} = require('./greetings');

// import { a, greet } from './greeting.js';

var name = 'Suraj Sanwal';

console.log(a);
morningGreet(name);
nightGreet(name);

// console.log(this); // empty object in Node.js 
// console.log(globalThis); // global object in Node.js
// console.log(global === globalThis);
