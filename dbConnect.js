'use strict';

const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;

const mongo = () => {
    mongoose.connect(db, { useNewUrlParser: true })
        .then(() => { console.log("MongoDB connected..."); })
        .catch(err => { console.log(err); })
}
const close = () => {
    mongoose.disconnect();
}

module.exports = mongo, close;