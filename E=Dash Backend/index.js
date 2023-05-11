require("./DB/config.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./DB/User.js");
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: '*' }));

//Signup API =======================================================================================================
app.post("/register", async (req, res) => {
    const user = new users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.newPassword;
    res.send(result);
})

//Login API =======================================================================================================

app.post("/login", async (req, res) => {
    let user = await users.findOne(req.body).
        select("-newPassword").
        select("-repeatPassword").
        select("-mobileNumber").
        select("-fullAddress").
        select("-pincode");
    user ? res.send(user) : res.send({ result: "No user found" });
})

app.listen(5050, () => console.log("Server Started"));
