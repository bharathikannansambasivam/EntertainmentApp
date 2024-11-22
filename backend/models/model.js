const mongoose = require("mongoose");

const entertainmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["TV Series", "Movie"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  release_year: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,

    required: true,
  },
  imageURL: {
    type: String,
  },
});

const Entertainment = mongoose.model("Entertainment", entertainmentSchema);
module.exports = Entertainment;
