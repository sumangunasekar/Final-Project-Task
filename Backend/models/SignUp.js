const mongoose = require("mongoose");

const SignUpSchema = mongoose.Schema({
 Name : String,
 Father_Name :String,
 DOB : String,
 Branch : String,
 RollNumber : Number,
 Section : String,
 Address : String,
 Mobile_Number : Number,
 Password : String
});
const SignUp = mongoose.model("SignUp", SignUpSchema);
module.exports = SignUp;