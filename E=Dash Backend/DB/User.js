const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    fullname: String,
    newPassword: String,
    repeatPassword: String,
    mobileNumber: Number,
    fullAddress: String,
    pincode: Number
});
module.exports = mongoose.model("users", userSchema);