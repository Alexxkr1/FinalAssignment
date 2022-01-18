const mongoose = require("mongoose");
const passport = require('passport');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
passport.use(User.createStrategy());

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

module.exports = mongoose.model("User", userSchema)