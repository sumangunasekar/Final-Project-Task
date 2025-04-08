const mongoose = require("mongoose");

const SignInSchema = mongoose.Schema({
  RollNumber : Number,
  Password : String
});
const SignIn = mongoose.model("SignIn", SignInSchema);
module.exports = SignIn;