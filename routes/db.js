const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://webzargab:zKnEH0BGeBXLjDgA@gabriel.brv3c.mongodb.net/CWG?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = client;
