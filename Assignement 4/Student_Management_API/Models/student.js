const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: String,
    course: String,
    age: Number,
    phone: String,
    email: String,
    city: String
});

module.exports = mongoose.model("Student", studentSchema);