const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: "Invalid Email Format"

        }
    },
    fullname: { type: String, required: true },
    newPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.length >= 8;
            },
            message: "Password Must be at least 8 characters long"
        }
    },
    mobileNumber: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return /^[0-9]{10}$/.test(value);
            },
            message: "Invalid Mobile Number Format"
        }
    },
    fullAddress: { type: String, required: true },
    pincode: { type: Number, required: true },
    cart: [
        {
            prodId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
                unique: false,
            },
            qty: {
                type: Number,
                default: 1
            }
        }
    ]
});
module.exports = mongoose.model("users", userSchema);