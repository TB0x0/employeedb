const { response } = require("express");
const express = require("express");
 
// recordRoutes is an instance of the express router used to define routes
// The router will be added as a middleware and will take control of requests starting with path /record.
const routes = express();
 
// Connect to the database
const dbo = require("../db/conn");
 
// Convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
const dbModels = require("../models/dbSchemas");

// Get a list of all the records.
routes.get("/record", async (req, res) => {
 const record = await dbModels.find({});

 try {
  response.send(foods);
 } catch (error) {
  res.status(500).send(error);
 }
   
});
 
// Create a new record

routes.post("/record/add", async (rez, res) => {
  const record = new dbModels.employeeInfo(req, res);

  try {
    await record.save();
    response.send(record);
  }catch (error) {
    response.status(500).send(error);
  }
});

/*
// Get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.connect();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("records")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// Create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.connect();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// Update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.connect();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 db_connect
   .collection("records")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// Delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.connect();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 */
module.exports = routes;