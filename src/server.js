const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const morgan = require("morgan");



// Initializations
const app = express();
require("./config/passport");

// Initialize data
require("./initialData/appServerInit");


// settings
app.set("port", process.env.PORT || 3002);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(morgan("dev"));
app.use(express.json());


// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/users.routes"));

app.use(require("./routes/rentals.routes"));
app.use(require("./routes/customers.routes"));
app.use(require("./routes/movies.routes"));
app.use(require("./routes/artists.routes"));
app.use(require("./routes/companies.routes"));

// static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
