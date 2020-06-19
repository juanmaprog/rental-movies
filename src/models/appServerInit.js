const { Schema, model } = require("mongoose");

const appServerInitSchema = new Schema({
  loadedDataTest: Boolean
});
module.exports = model("AppServerInit", appServerInitSchema);
