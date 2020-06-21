require("../connection");
const CompanyType = require("../models/CompanyType");

const companyTypeController = {
  getAll(req, res) {
    CompanyType.find()
      .then((entities) => res.send(entities))
      .catch((error) => {
        console.error(error);
        res.status(500).send({ message: error.message });
      });
  },
};

module.exports = companyTypeController;
