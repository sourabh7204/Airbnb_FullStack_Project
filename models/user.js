const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongooes = require("passport-local-mongoose");

const userSchema = new Schema({
  email: String,
  required: true,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
