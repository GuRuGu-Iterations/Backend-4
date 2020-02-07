const express = require("express");

// Initialize environment variables
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => console.log("Server is listening on port 5001"));
