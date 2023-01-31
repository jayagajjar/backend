const mongoose = require("mongoose");
require("dotenv").config();

let mongodbURI;
if (process.env.MONGODB_URI == undefined) {
  mongodbURI = "";
} else {
  mongodbURI = process.env.MONGODB_URI;
}
const connection = mongoose
  .connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
