const express = require(express);

// Create an express router instance for the users collection
const userRoutes = express.Router();

// Connect to the database
const dbo = require("../db/conn");

// Convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get a user by id
recordRoutes.route("/user/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   // Create a new user
recordRoutes.route("/user/add").post(function (req, response) {
    let db_connect = dbo.getDb();
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