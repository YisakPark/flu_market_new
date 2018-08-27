const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const BuildingSchema = new Schema({
  number: {
    type: Number
  },
  name: {
    type: String
  }
});

module.exports = Building = mongoose.model("buildings", BuildingSchema);
