const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const validateStudent = require("../student-API/validation.js");

const app = express();

app.use(express.json());
app.use(validateStudent);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/collegeDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const studentRoutes = require("./Routes/studentRoutes");
app.use("/students", studentRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});