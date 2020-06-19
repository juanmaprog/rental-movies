const router = require("express").Router();
const rentDetailsController = require("../controllers/rentDetailController");

router.get("/", rentDetailsController.getAll);

module.exports = router;
