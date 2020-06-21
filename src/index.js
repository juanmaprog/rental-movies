// requires moudules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require('express-handlebars');
require('dotenv').config();

// Initializations
const app = express();
// require('./config/passport');
// const port = 3002;

// Initialize data
require('./initialData/appServerInit');

// Settings
app.set("port", process.env.PORT || 3002);
app.set("initialDataFiles", path.join(__dirname, "initialData/files"));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));

// middelwares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// requires routes
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

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get("port"), () => {
  console.log("running server on port", app.get("port"));
});
