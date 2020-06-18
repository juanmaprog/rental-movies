// Estas solo van a ser del api para devolver en formato json

// Traer el router de express
const router = require("express").Router();

// Mandar todas las peticiones que entren con /films al filmsRouter
// 1. lo requiero
const apiFilmsRouter = require("./api/films");
// 2. todas las rutas que vengan con /films me lo mandas al gestor de rutas apiFilmsRouter.
// Aquí todas las rutas que entren en este fichero ya vienen con el prefijo api,
// entonces, todos las rutas que mande a apiFilmsRouter ya tendrán el prefijo /api/films
router.use("/films", apiFilmsRouter);

// Usuarios
const apiUsersRouter = require("./api/users");
router.use("/users", apiUsersRouter);

// Exportarlo
module.exports = router;
