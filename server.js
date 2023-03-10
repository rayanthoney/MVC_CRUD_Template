//todo - Declare Variables
const express = require("express");
const app = express();
const PORT = 8500;
const mongoose = require("mongoose");

// Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);
mongoose.set("strictQuery", true);

//*Import functions/routes
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const editRoutes = require("./routes/edit");

require("dotenv").config({ path: "./config/.env" });

//todo - Connect to Database
connectDB();

//todo - Set Middleware
app.set("view engine", "ejs");
// Static Folder
app.use(express.static("public"));

//*Required to properly parse form POST requests - sending data
app.use(express.urlencoded({ extended: true }));

//todo - Set Routes
app.use("/edit", editRoutes);
app.use("/", homeRoutes);

//todo - Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
