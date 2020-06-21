const router = require("express").Router();
const receiptController = require("../controllers/receiptController");

router.get("/", receiptController.getAll);

module.exports = router;
