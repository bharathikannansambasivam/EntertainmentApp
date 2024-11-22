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
  res.send("Hello");
});

app.get("/getAllMovies", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 16;
    const startIndex = (page - 1) * limit;

    const movies = await entertainmentModel
      .find()
      .skip(startIndex)
      .limit(limit);

    res.send(movies);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/search", async (req, res) => {
  const { title } = req.query;

  try {
    const movies = await entertainmentModel.find({
      title: { $regex: title, $options: "i" },
    });
    if (movies.length > 0) {
      res.json(movies);
    } else {
      res.status(404).json({ message: "No movies found" });
    }
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

mongoose.connect(MONGO_URL).then(() => {
  console.log("DB Connected Successfully");
  app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
  });
});
