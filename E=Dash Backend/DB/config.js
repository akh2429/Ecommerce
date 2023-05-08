const mongoose = require("mongoose");
const db = "mongodb+srv://admin:admin@cluster0.9afgoex.mongodb.net/E-com?retryWrites=true&w=majority";

mongoose.connect(db).then(() => {
    console.log("Connection Sucessful")
}).catch(() => console.log("Error in connecting Database"))