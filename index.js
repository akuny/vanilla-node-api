require('dotenv').config();
const config = require('./lib/config');
const server = require('./lib/server');

server.listen(config.port, 'localhost', () => {
    console.log(`Server up and running on ${config.port}`); 
});
