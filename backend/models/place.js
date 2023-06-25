const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
  imageUrl: {
    type: "String",
    required: false,
  },
  location: {
    lat: { type: "Number", required: true },
    lng: { type: "Number", required: true },
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Place",
  },
});

module.exports = mongoose.model("Place", placeSchema);
