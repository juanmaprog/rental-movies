const router = require("express").Router();
const moviesController = require("../controllers/moviesController");

router.use("/", moviesController.getAll);

module.exports = router;
