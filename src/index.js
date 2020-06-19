const express = require("express");
const bodyParser = require("body-parser");

const port = 3002;
const app = express();

// middelweres
app.use(express.json());

// requires
const moviesRouter = require("./routes/movies");

// routes
app.use("/api/movies", moviesRouter);

app.listen(port, () => {
  console.log("running server!");
});


