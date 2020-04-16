const http = require('http');

const server = http.Server((req, res) => {
    console.log(`Request for: ${req.url}`);
    res.statusCode = 200;
    return res.end('Yo');
});

module.exports = server;
