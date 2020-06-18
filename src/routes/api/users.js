// Todas las peticiones que entren en este fichero ya tendrán
// el prefijo /api/users

// Traer el router
const router = require("express").Router();
// Traer la librería bcrypt

// Traer el modelo
// Saco del fichero db el modelo user
const { User } = require("../../db");

// POST para agregar una película.
// La ruta POST lo bueno que tiene es que podemos incorporar objetos
// a través del body. Podemos asociar a la petición una serie de
// objetos que inyectaremos luego.
router.post("/", async (req, res) => {
  //   res.send("Película creada"); //Test
  const user = await Film.create(req.body); // a create le pasamos en objeto entero asociado a la petición POST
  //Una vez creada la película que la devuelva a través de un res.json
  res.json(user);
});

// Exportarlo
module.exports = router;
