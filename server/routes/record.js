const { res } = require("express");
const express = require("express");
 
// recordRoutes is an instance of the express router used to define routes
// The router will be added as a middleware and will take control of requests starting with path /record.
const routes = express();
 
// Connect to the database
const dbo = require("../db/conn");
 
// Convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
const dbModel = require("../models/employees");

// Get a list of all the records.
routes.get("/record", async (req, res) => {
 const record = await dbModel.employeeInfo.find();
 try {
  res.send(record);
 } catch (error) {
  res.status(500).send(error);
 }
   
});


// Create a new record
routes.post("/record/add", async (req, res) => {
  const record = new dbModel.employeeInfo(req.body);
  console.log(record);
  try {
    await record.save();
    res.send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Get a single record by id
routes.get("/record/:id", async (req, res) => {
 try {
  const employee = await dbModel.employeeInfo.findOne(ObjectId(req.params.id));
  res.send(employee)
 }catch (error) {
  res.status(400).send(error);
}
});
 
// Update a record by id.
routes.post("/update/:id", async (req, res) => {
 let id = ObjectId(req.params.id);
 let newvalues = {
   $set: {
     emp_name: req.body.name,
     position: req.body.position,
     level: req.body.level,
     join_date: req.body.join_date,
     hourly_rate: req.body.hourly_rate
   }
 };

 const employee = await dbModel.employeeInfo.findOneAndUpdate(id, newvalues);
 res.send(employee);


});
 
// Delete a record
routes.route("/:id").delete((req, response) => {
 let myquery = { _id: ObjectId(req.params.id) };
 dbModel.employeeInfo.deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
module.exports = routes;