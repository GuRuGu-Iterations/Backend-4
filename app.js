const express = require("express");
const morgan = require("morgan");

// Set environment variables
require("dotenv").config();

const app = express();

// Initialize middleware
app.use(morgan("dev"));

// Run server
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log("Server is listening on port 5001"));
