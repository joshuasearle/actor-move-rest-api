const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    requred: true,
  },
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }],
});

module.exports = mongoose.model('Movie', movieSchema);
