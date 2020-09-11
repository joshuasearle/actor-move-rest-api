const mongoose = require('mongoose');

const Actor = require('../models/actor');

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
  const id = req.params.id;
  try {
    const actor = await Actor.findOneAndRemove({ _id: id });
    if (!actor) res.status(404).json();
    res.json(actor);
  } catch (e) {
    res.status(400).json(e);
  }
};
