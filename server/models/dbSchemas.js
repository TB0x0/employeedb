const mongoose = require('mongoose');
const Schema = mongoose.schema;

const employeeInfoSchema = mongoose.Schema({
    emp_name: { type: String, require: true },
    position: { type: String, require: true },
    level: { type: String, require: true },
    join_date: { type: Date, require: false },
    hourly_rate: { type: Number, require: false }
})

const employeeInfo = mongoose.model("employeeInfo", employeeInfoSchema);


const userTableSchema = mongoose.Schema({
    user_id: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true }
})

const userTable = mongoose.model("userTable", userTableSchema);

module.exports = {
    employeeInfo,
    userTable
}