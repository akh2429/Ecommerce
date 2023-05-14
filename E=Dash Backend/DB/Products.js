const mongoose = require("mongoose");

const productscheema = new mongoose.Schema({
    category: String,
    productname: String,
    brand: String,
    price: Number,
    productspec: { type: mongoose.Schema.Types.Mixed },
    image: String,
    discount: Number
});

module.exports = mongoose.model("products", productscheema);