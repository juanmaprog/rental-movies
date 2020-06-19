const router = require("express").Router();
const moviesController = require("../controllers/movieController");

router.get("/", moviesController.getAll);

module.exports = router;
