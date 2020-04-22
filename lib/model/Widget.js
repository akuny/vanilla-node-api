const database = require ('../database');

class Widget {
    constructor(args = {}) {
        this.db = database.getDb();
        this.collection = this.db.collection('widgets');
        this.name = args.name;
        this.description = args.description;
    }

    findAll(callback) {
        this.collection.find({}).toArray((err, docs) => {
            if (err) {
                callback(err);
            }
            callback(null, docs);
        });
    }

    findOne(callback) {
        const query = { 
            name: { $eq: this.name }
        } 

        this.collection.findOne(query, (err, result) => {
            if (err) {
                callback(err);
            }
            callback(null, result);
        });
    }

    create(callback) {
        const newWidget = {
            name: this.name,
            description: this.description
        }

        this.collection.insertOne(newWidget, (err, result) => {
            if (err) {
                callback(err);
            }
            callback(null, result.ops);
        })
    }
}

module.exports = Widget;
