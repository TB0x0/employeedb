const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the database schema for the users collection
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    created: {
        type: Date,
        required: [true, 'Date is required']
    }
});

// Hash the password before saving
userSchema.pre('save', async function(next) {
    try {
        if (!user.isModified('password')) next();
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }
    catch (error) {
        return next(error);
    }
});


const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
