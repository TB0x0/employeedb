const mongoose = require('mongoose');
const Schema = mongoose.schema;

const employeeInfoSchema = mongoose.Schema(
    {
    emp_name: { type: String, require: true },
    position: { type: String, require: true },
    level: { type: String, require: true },
    join_date: { type: Date, require: false },
    hourly_rate: { type: Number, require: false }
    },
    { collection: "employeeInfo" }
)

const employeeInfo = mongoose.model("employeeInfo", employeeInfoSchema);

module.exports = {
    employeeInfo
}