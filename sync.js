console.log("Hello Suraj! This is sync.js!");
// This file is used to demonstrate synchronous operations in Node.js.

const a = 235;
const b = 9899;

function multiply (a, b) {
  return a + b;
}

const result = multiply(a, b);
console.log("The result of multiplication is: " + result);