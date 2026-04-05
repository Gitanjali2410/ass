const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, 
    title: String,
    author: String,
    price: Number,
    publishedyear: Number
});

module.exports = mongoose.model("Book", bookSchema);