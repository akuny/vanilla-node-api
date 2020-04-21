require('dotenv').config();
const config = require('./lib/config');
const db = require('./lib/database');
const app = require('./lib/app');

db.connect({ url: config.databaseURL, name: config.databaseName }, (err, isConnected) => {
    if (err) {
        console.log(err);
    }
    
    console.log('Connected to database');

    app.listen(config.port, () => {
        console.log(`Server up and running on ${config.port}`); 
    });
});
