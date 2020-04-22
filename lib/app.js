const http = require('http');
const router = require('./router');

const app = http.Server((req, res) => {
    router.handle(req, res);
});

module.exports = app;
