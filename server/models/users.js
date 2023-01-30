const mongoose = require('mongoose');
const Schema = mongoose.schema;

const userTableSchema = mongoose.Schema({
    user_id: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true }
})

const userTable = mongoose.model("userTable", userTableSchema);

module.exports = {
    userTable
}