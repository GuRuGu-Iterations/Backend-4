const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");

// Set environment variables
require("dotenv").config({ path: "process.env" });

const app = express();

// Initialize middleware
app.use(morgan("dev"));

// Routes
app.use("/api/main", mainRouter);

// Run server
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
