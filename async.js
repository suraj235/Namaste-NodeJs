const fs = require('node:fs');
const https = require('node:https');

console.log("Hello Suraj! This is async.js!");
// This file is used to demonstrate asynchronous operations in Node.js.

const a = 235;
const b = 9899;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log('Response status code:', res.statusCode);
})

setTimeout(() => {
    console.log("This is a delayed message after 5 seconds.");
}, 5000);

fs.readFile('./file.txt', 'utf8', (err, data) => {
    console.log('File content:', data);
});

function multiply (a, b) {
  return a + b;
}

const result = multiply(a, b);
console.log("The result of multiplication is: " + result);