const http = require('http');
const Router = require('./router');

const router = new Router();

const server = http.Server((req, res) => {
    router.handle(req, res);
});

module.exports = server;
