const router = require("express").Router();
const artistsController = require("../controllers/artistController");

router.get("/", artistsController.getAll);

module.exports = router;
