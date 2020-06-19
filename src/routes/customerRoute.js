const router = require("express").Router();
const customersController = require("../controllers/customerController");

router.get("/", customersController.getAll);

module.exports = router;
