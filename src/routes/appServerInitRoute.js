const router = require("express").Router();
const appServerInitController = require("../controllers/appServerInitController");

router.get("/", appServerInitController.initServer);

module.exports = router;
