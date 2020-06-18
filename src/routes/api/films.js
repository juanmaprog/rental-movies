// Todas las peticiones que entren en este fichero ya tendrán
// el prefijo /api/films

// Traer el router
const router = require("express").Router();

// Me traigo el modelo
// Saco del fichero db el modelo film
const { Film } = require("../../db");

// Para comprobar que funciona.
// router.get("/", (req, res) => {
//   res.send("Entra y funciona correctamente.");
// });

// Traerme todas las películas
// Esto devuelve una promesa. Lo pongo con el try
// o de la siguiente manera...
router.get("/", async (req, res) => {
  // res.send("Entra y funciona correctamente."); //Test
  const films = await Film.findAll();
  // Una vez obtenidas todas las películas,
  // hago res.json de films. Coge el array y lo empaqueta en un json
  // y lo manda al cliente.
  res.json(films);
});

// POST para agregar una película.
// La ruta POST lo bueno que tiene es que podemos incorporar objetos
// a través del body. Podemos asociar a la petición una serie de
// objetos que inyectaremos luego.
router.post("/", async (req, res) => {
  //   res.send("Película creada"); //Test
  const film = await Film.create(req.body); // a create le pasamos en objeto entero asociado a la petición POST
  //Una vez creada la película que la devuelva a través de un res.json
  res.json(film);
});

// PUT
router.put("/:filmId", async (req, res) => {
  await Film.update(req.body, {
    where: { id: req.params.filmId },
  });
  res.json({ success: "Se ha modificado" });
});

// DELETE
router.delete("/:filmId", async (req, res) => {
  await Film.destroy({
    where: { id: req.params.filmId },
  });
  res.send("Se ha eliminado la película.");
});

// Exportarlo
module.exports = router;
