const router = require("express").Router();
const rentsController = require("../controllers/rentController");

router.get("/", rentsController.getAll);

module.exports = router;
