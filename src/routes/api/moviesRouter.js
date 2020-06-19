// const router = require("express").Router();
// const { movies } = require("../../models/Movie");
// const { moviesController }= require('../../controllers/moviesController');

// router.get("/", moviesController.getAll);



const router = require("express").Router();
const moviesController = require('../../controllers/moviesController');

router.use('/', moviesController.getAll);




module.exports = router;
