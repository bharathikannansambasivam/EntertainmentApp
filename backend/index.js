require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
const entertainmentModel = require("./models/model");

app.get("/", (req, res) => {
  res.send("Helllooo");
});

app.post("/entertainment", async (req, res) => {
  const { name, genre, category, description, release_year, rating } = req.body;

  try {
    const movieData = {
      name,
      genre,
      category,
      description,
      release_year,
      rating,
      image_url:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    };

    const movies = await entertainmentModel.create(movieData);
    res.send(movies);
  } catch (e) {
    res.send(e.message);
  }
});

app.get("/getAllMovies", async (req, res) => {
  try {
    const movies = await entertainmentModel.find();
    res.send(movies);
  } catch (e) {
    res.send(e.message);
  }
});
mongoose.connect(MONGO_URL).then(() => {
  console.log("DB Connected Successfully");
  app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
  });
});
