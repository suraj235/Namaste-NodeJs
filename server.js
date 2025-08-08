const http = require('node:http');

const server = http.createServer((req, res) => {
    if (req.url === '/suru') {
        res.end('Hello, Iluu!');
    } else {
        res.end('Hello, World!');
    }
});

server.listen(9899);