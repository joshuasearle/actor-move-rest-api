const express = require('express');

const actors = require('../controllers/actor');
const movies = require('../controllers/movie');

const router = express.Router();

// Actor routes
router.get('/actors', actors.getAll);
router.post('/actors', actors.createOne);
router.get('/actors/:id', actors.getOne);
router.put('/actors/:id', actors.updateOne);
router.delete('/actors/:id', actors.deleteOne);
router.put('/actors/:actorId/:movieId', actors.removeMovieFromActor);

// Movies routes
router.get('/movies', movies.getAll);
router.get('/movies', movies.getAll);
router.post('/movies', movies.createOne);
router.get('/movies/:id', movies.getOne);
router.put('/movies/:id', movies.updateOne);
router.delete('/movies/:id', movies.deleteOne);

// 404 route
router.use('/', (req, res) => res.status(404).json());

module.exports = router;
