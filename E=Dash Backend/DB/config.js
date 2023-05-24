const mongoose = require("mongoose");
const db = process.env.MONGO_CONNECTION
mongoose.connect(db).then(() => {
    console.log("Connection Sucessful")
}).catch(() => console.log(db));