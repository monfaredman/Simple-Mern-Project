const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  location: {
    lat: { type: Number, required: false },
    lng: { type: Number, required: false },
  },
  creator: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "User", // Reference the "User" model
  },
});

module.exports = mongoose.model("Place", placeSchema);
