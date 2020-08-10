const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, 'Author required!'],
  },
  path: {
    type: String,
    required: [true, 'Path required'],
  },
  password: {
    type: String,
    match: ['1234', 'Please add a valid password'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Photo', PhotoSchema);
