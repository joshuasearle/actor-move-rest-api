const mongoose = require('mongoose');

const Actor = require('../models/actor');
const Movie = require('../models/movie');

module.exports.getAll = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (e) {
    res.json(e);
  }
};

module.exports.createOne = async (req, res) => {
  const actorDetails = { ...req.body, _id: mongoose.Types.ObjectId() };
  const actor = new Actor(actorDetails);
  try {
    const result = await actor.save();
    res.json(result);
  } catch (e) {
    res.json(e);
  }
};

module.exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const actor = await Actor.findOne({ _id: id }).populate('movies');
    res.json(actor);
  } catch (e) {
    res.json(e);
  }
};

module.exports.updateOne = async (req, res) => {
  const id = req.params.id;
  try {
    // Update actor with what is in the body of the request
    const actor = await Actor.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!actor) return res.status(404).json();
    res.json(actor);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.deleteOne = async (req, res) => {
  if (req.body.deleteMovies) return await deleteActorAndMovies(req, res);
  const id = req.params.id;
  try {
    const actor = await Actor.findOneAndRemove({ _id: id });
    if (!actor) res.status(404).json();

    // If deleteMovies option is selected, delte the movies
    if (req.body.deleteMovies) await deleteActorMovies(actor);

    res.json(actor);
  } catch (e) {
    res.status(400).json(e);
  }
};

const deleteActorMovies = async actor => {
  const movieIds = actor.movies;
  // Delete all movies in parallel
  const movieDeletions = movieIds.map(movieId => {
    return Movie.deleteOne({ _id: movieId });
  });
  await Promise.all(movieDeletions);
};

module.exports.removeMovieFromActor = async (req, res) => {
  const { actorId, movieId } = req.params;
  try {
    // TODO
    // Probably a way to do this in one database call
    const actor = await Actor.findById(actorId);
    if (!actor) return res.status(404).json();
    const result = await findByIdAndUpdate(
      actorId,
      'movies',
      actor.movies.filter(actorMovieId => actorMovieId != movieId)
    );
    res.json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
