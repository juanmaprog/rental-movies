const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3002;

app.use(express.json());

// require
const moviesRouter = require("./routes/api/moviesRouter");

// routes
app.use("/api/movies", moviesRouter);
app.use('/', (req,res) =>{res.send('asdf')});

app.listen(port, () => {
  console.log("running server!");
  // console.log(app);
});

// Requerir para poder sincronizar la db
//  const mongo = require("./dbMongo");
//  console.log(mongo);
//  console.log(mongo.isConnection());

// Configuraciones y middelwers
// con app.use se lanza el middleware
// app.use(bodyParser.json()); // Lanza middlewew con la función json.
// app.use(bodyParser.urlencoded({ extended: true })); // Codifica la url.

// Todas las peticiones que vengan con el prefijo api se envía para que lo gestione al api router
// app.use("/api", apiRouter);

// Levantar el servidor

// const mongoose = require("./connection");
// const Movie = require("./models/Movie");

// app.use("/", (req, res) => {
//   // res.send("asdfasdf");
//   res.send(mongoose.connect);
// });

//callback
// movie.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

// const moviesController = require("./controllers/moviesController");
// app.use("/movies", moviesController.getAll);

// app.use("/api", apiRouter);

// app.listen(port, () => {
//   console.log("Servidor iniciado!");
// });

// return;

// async function main() {
//   const movie = new Movie({
//     createdBy: "juan",
//     createdAt: Date.now(),
//     tag: "",
//     title: "",
//     tagline: "",
//     plot: "",
//     awards: "",
//     rating: "",
//     genre: "",
//     releaseDate: Date.now(),
//     runTime: "",
//     isColor: true,
//     photo: "",
//     webSite: "",
//     aspectRatio: "",
//     languaje: "",
//     category: "",
//   });

//   const movieSaved = await movie.save();
//   return movieSaved;
// }

// main()
//   .then((movieSaved) => console.log(movieSaved))
//   .catch((err) => console.log(err));

// console.log(movie);
