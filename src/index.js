const express = require("express");
const bodyParser = require("body-parser");

const port = 3002;
const app = express();

// middelwares
app.use(express.json());

// requires
const appServerInitRouter = require("./routes/appServerInitRoute");
const artistRouter = require("./routes/artistRoute");
const companyRouter = require("./routes/companyRoute");
const customersRouter = require("./routes/customerRoute");
const movieRouter = require("./routes/movieRoute");
const receiptRouter = require("./routes/receiptRoute");
const rentRouter = require("./routes/rentRoute");
const rentDetailsRouter = require("./routes/rentDetailRoute");
const userRouter = require("./routes/userRoute");

// routes
app.use("/api/appserverinit", appServerInitRouter);
app.use("/api/artists", artistRouter);
app.use("/api/companies", companyRouter);
app.use("/api/customers", customersRouter);
app.use("/api/movies", movieRouter);
app.use("/api/receipts", receiptRouter);
app.use("/api/rents", rentRouter);
app.use("/api/rentdetails", rentDetailsRouter);
app.use("/api/users", userRouter);

// start server
app.listen(port, () => {
  console.log("running server!");
});
