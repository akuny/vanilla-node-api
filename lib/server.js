const http = require('http');
const Router = require('./router');
const routes = require('./routes');

const router = new Router();
router.register(routes);

const server = http.Server((req, res) => {
    router.handle(req, res);
});

module.exports = server;
