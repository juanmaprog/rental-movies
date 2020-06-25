require("../connection");
const Receipt = require("../models/Receipt");

const receiptController = {
  getAll(req, res) {
    Receipt.find()
      .then((entities) => res.send(entities))
      .catch((error) => {
        console.error(error);
        res.status(500).send({ message: error.message });
      });
  },
};

module.exports = receiptController;
