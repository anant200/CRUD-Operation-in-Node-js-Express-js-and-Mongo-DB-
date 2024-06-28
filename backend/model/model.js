//model/model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    mobile: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

const Anantmodel = mongoose.model('anants', userSchema);

module.exports = Anantmodel;