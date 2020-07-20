const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    desc: String
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;