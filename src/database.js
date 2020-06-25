const mongoose = require("mongoose");

const { APP_MONGODB_HOST, APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${APP_MONGODB_HOST}/${APP_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .catch((err) => console.log(err.reason));

//once execute only one
mongoose.connection.once("open", (_) => {
  console.log(
    "Database is connected to",
    APP_MONGODB_HOST,    
    APP_MONGODB_DATABASE
  );
});

//Emitted if an error occurs on a connection, like a parseError due to malformed data or a payload larger than 16MB
mongoose.connection.on("error", (err) => {
  console.log(err);
});
