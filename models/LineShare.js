const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const LineShareSchema = new Schema({
  cost: {
    type: Schema.Types.Decimal128
  }
});

module.exports = LineShare = mongoose.model("lineshares", LineShareSchema);
