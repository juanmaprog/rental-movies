// express-handlebars Register helpers
const exphbs = require("express-handlebars");

const helpers = {};

Handlebars.registerHelper("loud", function (aString) {
  return aString.toUpperCase();
});

module.exports = helpers;
