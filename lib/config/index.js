const app = require('./app-config.js');
const database = require('./database-config.js');

module.exports = {...app, ...database};