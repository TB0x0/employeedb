// Database connection

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
const dbUrl = process.env.ATLAS_URI;

// Function to connect to the database
const connect = async () => {
    mongoose.connect(dbUrl, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    const db = mongoose.connection;

    db.on("error", () => {
        console.log("Could not connect to database");
    });
    db.once("open", () => {
        console.log("Successfully connected to databse");
    });
};

// When module is called return the connect function
module.exports = { connect };