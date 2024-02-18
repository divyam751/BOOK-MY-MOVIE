const mongoose = require("mongoose");

const seatsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  booked: { type: Boolean, required: true },
  rowName: { type: String, required: true },
  selected: { type: Boolean, required: true },
});

const SeatsModel = mongoose.model("seats", seatsSchema);

module.exports = { SeatsModel };
