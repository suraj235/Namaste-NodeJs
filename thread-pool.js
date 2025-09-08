process.env.UV_THREADPOOL_SIZE = 4; // Initialse threadpool size before the libuv is loaded.
// Doing this will not work in the latest versions of Node.js as the default size is 4 and the max is 128.
// Other way to set the UV_THREADPOOL_SIZE is through terminal using the command:
// $env:UV_THREADPOOL_SIZE=4; node .\thread-pool.js

const fs = require('node:fs');
const crypto = require('node:crypto');

crypto.pbkdf2('password', 'salt', 500000, 512, 'sha512', () => {
    console.log("Password 1 encrypted!");
});

crypto.pbkdf2('password', 'salt', 500000, 512, 'sha512', () => {
    console.log("Password 2 encrypted!");
});

crypto.pbkdf2('password', 'salt', 500000, 512, 'sha512', () => {
    console.log("Password 3 encrypted!");
});

crypto.pbkdf2('password', 'salt', 500000, 512, 'sha512', () => {
    console.log("Password 4 encrypted!");
});

crypto.pbkdf2('password', 'salt', 500000, 512, 'sha512', () => {
    console.log("Password 5 encrypted!");
});