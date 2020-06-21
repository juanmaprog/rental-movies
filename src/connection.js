// Instalación
// npm install mongodb --save
// npm install mongosse

// Cargar films y generar la tabla en la db sin tener que entrar en la propia db.
// Traer el modelo
// const FilmModel = require("./models/films");
// const UserModel = require("./models/users");

// function isConnection(){

//   return false;

// }

// const ConnMongo = {
//   isConnection() {
//     return "true";
//   },
// };

// module.exports = {
//   ConnMongo,
// };

// Exportar para utilizarlo fuera
// module.exports = {
//   Film,
//   User,
// };

const mongoose = require("mongoose");

// const urlMongo =
//   "mongodb+srv://<username>:<password>@nordicdb-hvkd5.mongodb.net/test"; //"mongodb://localhost:27017";

// const uri = "mongodb://localhost:27017/RentalMovies";

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .catch((err) => console.log(err.reason));

//once execute only one
mongoose.connection.once("open", (_) => {
  console.log("Database is connected to", uri);
});

//Emitted if an error occurs on a connection, like a parseError due to malformed data or a payload larger than 16MB
mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
