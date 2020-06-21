const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI:", MONGODB_URI);

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
  console.log("Database is connected to", MONGODB_URI);
});

//Emitted if an error occurs on a connection, like a parseError due to malformed data or a payload larger than 16MB
mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
