const express = require("express");
const bodyParser = require("body-parser");

const port = 3002;
const app = express();

// middelwares
app.use(express.json());

// requires
const appServerInitRouter = require("./routes/appServerInitRoute");
const artistRouter = require("./routes/artistRoute");
const companiesRouter = require("./routes/companyRoute");
const customersRouter = require("./routes/customerRoute");
const moviesRouter = require("./routes/movieRoute");
const rentsRouter = require("./routes/rentRoute");
const rentDetailsRouter = require("./routes/rentDetailRoute");
const usersRouter = require("./routes/userRoute");

// routes
app.use("/api/appserverinit", appServerInitRouter);
app.use("/api/artists", artistRouter);
app.use("/api/companies", companiesRouter);
app.use("/api/customers", customersRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/rents", rentsRouter);
app.use("/api/rentdetails", rentDetailsRouter);
app.use("/api/users", usersRouter);

// start server
app.listen(port, () => {
  console.log("running server!");
});
