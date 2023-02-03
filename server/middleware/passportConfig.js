// Passport authentication config

const passport = require('passport');
const localStrategy = require("passport-local").Strategy;
const user = require("../models/users");

module.exports = (passport) => {
    // User signup function
    passport.use(
        "local-signup",
        new localStrategy(
            {
                usernameField: "email",
                passwordField: "password",
            },
            async (email, password, done) => {
                try {
                    // Check if user already exists and if not make a new one
                    const userExists = await user.userTable.findOne({ "email": email });
                    if (userExists) {
                        return done(null, false);
                    }
                    const newUser = await user.create({ email, password });
                    return done(null, newUser);
                } catch (error) {
                    done(error);
                }
            }
        )
    );
    
    // User login function
    passport.use(
        "local-login",
        new localStrategy(
            {
                usernameField: "email",
                passwordField: "password",
            },
            async (email, password, done) => {
                try {
                    const userExists = await user.userTable.findOne({ "email": email });
                    if (!userExists) {
                        return done(null, false);
                    }

                    // Check if password matches the correct one
                    const isCorrect = await user.userTable.matchPassword(password);
                    if (!isCorrect) {
                        return done(null, false);
                    }

                    return done(null, userExists);
                } catch (error) {
                    console.log(error);
                    return done(error, false);
                }
            }

        )
    );
}