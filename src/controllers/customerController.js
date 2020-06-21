require("../connection");
const Customer = require("../models/Customer");

const customerController = {
  getAll(req, res) {
    Customer.find()
      .then((entities) => res.send(entities))
      .catch((error) => {
        console.error(error);
        res.status(500).send({ message: error.message });
      });
  },
};

module.exports = customerController;