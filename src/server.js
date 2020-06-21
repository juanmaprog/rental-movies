const express = require("express");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

module.exports = app;
