const express = require("express"); 
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/libraryDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const bookRoutes = require("./Routes/bookRoutes");
app.use("/books", bookRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});