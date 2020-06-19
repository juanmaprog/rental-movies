require("../connection");
const User = require("../models/User");

const companyController = {
  getAll(req, res) {
    User.find()
      .then((entities) => res.send(entities))
      .catch((error) => {
        console.error(error);
        res.status(500).send({ message: error.message });
      });
  },
};

module.exports = companyController;
