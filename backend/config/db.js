const mongoose = require("mongoose");
require("dotenv").config();

// const connection = mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connect(
  "mongodb+srv://Sample:bfTKg6CAam014lTJ@cluster0.e8nwm9g.mongodb.net/ticket-flix"
);

module.exports = { connection };
