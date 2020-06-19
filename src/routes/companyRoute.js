const router = require("express").Router();
const companiesController = require("../controllers/companyController");

router.get("/", companiesController.getAll);

module.exports = router;
