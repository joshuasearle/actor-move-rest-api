const express = require('express');

const actors = require('../controllers/actor');
const movies = require('../controllers/movie');

const router = express.Router();

router.get('/actors', actors.getAll);
router.post('/actors', actors.createOne);
router.get('/actors/:id', actors.getOne);
router.put('/actors/:id', actors.updateOne);
router.delete('/actors/:id', actors.deleteOne);

router.use('/', (req, res) => res.status(404).json());

module.exports = router;
