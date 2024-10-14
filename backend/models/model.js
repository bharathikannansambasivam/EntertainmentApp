const express = require("express");
const mongoose = require("mongoose");
const { type } = require("os");

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
    enum: ["Cartoon", "Movie"],
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
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

const Entertainment = mongoose.model("Entertainment", entertainmentSchema);
module.exports = Entertainment;
