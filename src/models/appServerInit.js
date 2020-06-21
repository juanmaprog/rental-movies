const { Schema, model } = require("mongoose");

const appServerInitSchema = new Schema({
  _id: String,
  loadedDataTest: Boolean
});

module.exports = model("AppServerInit", appServerInitSchema);
