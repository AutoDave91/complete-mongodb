const { MongoClient } = require('mongodb');

let dbConnection;
let uri = 'mongodb+srv://David:testing123@cluster0.0kpp8.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db();
                return cb();
            })
            .catch(err => {
                console.log('db connection error: ' + err);
                return cd(err);
            })
    },
    getDb: () => dbConnection
}