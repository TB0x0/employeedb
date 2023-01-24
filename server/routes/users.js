const mongoose = require('mongoose');

// Define the database schema for the users collection
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    created: {
        type: Date,
        required: [true, 'Date is required']
    }
})

module.exports = userSchema

const connectionString = ATLAS_URI;