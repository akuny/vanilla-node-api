const MongoClient = require('mongodb').MongoClient;
let database;

const connect = (options, callback) => {
    const client = new MongoClient(options.url, { useUnifiedTopology: true });

    client.connect(err => {
        if (err) {
            return callback(err);
        }
        
        database = client.db(options.name);

        return callback(null, true)
    });
}

const getDb = () => {
    return database;
}

module.exports = {
    connect,
    getDb
}
