const mongoose = require('mongoose');

const Movie = require('../models/movie');

module.exports.getAll = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.createOne = async (req, res) => {
  const movieDetails = { ...req.body, _id: mongoose.Types.ObjectId() };
  const movie = new Movie(movieDetails);
  try {
    await movie.save();
    res.json(movie);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findOne({ _id: id }).populate('actor');
    res.json(movie);
  } catch (e) {
    res.json(e);
  }
};

module.exports.updateOne = async (req, res) => {
  const id = req.params.id;
  try {
    // Update movie with what is in the body of the request
    const movie = await Movie.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!movie) return res.status(404).json();
    res.json(movie);
  } catch (e) {
    res.status(400).json(e);
  }
};
