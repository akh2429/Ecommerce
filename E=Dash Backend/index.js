require("./DB/config.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./DB/User.js");
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: '*' }));

app.post("/register", async (req, res) => {
    const user = new users(req.body);
    let result = await user.save();
    res.send(result);
})

app.get("/login", async (req, res) => {
    const result = await users.find();
    res.send(result);
})

app.listen(5050, () => console.log("Server Started"));
