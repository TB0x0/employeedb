const mongoose = require('mongoose');
const Schema = mongoose.schema;

const userSchema = mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
})

userSchema.pre('save', async function(next) {
    try {
        const user = this;
        if (!user.isModified('password')) next();

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(this.password, salt);

        this.password = hash;
        next();
    } catch (error) {
        return next(error)
    }
})

userSchema.methods.matchPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const userTable = mongoose.model("users", userSchema);

module.exports = {
    userTable
}