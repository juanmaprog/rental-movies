require("../connection");
const AppServerInit = require("../models/appServerInit");

const appServerInitController = { 
  initServer(req, res) {
    AppServerInit.findOne()
      .then((entity) => res.send(entity))
      .catch((error) => {
        console.error(error);
        res.status(500).send({ message: error.message });
      });
  },
};

module.exports = appServerInitController;
