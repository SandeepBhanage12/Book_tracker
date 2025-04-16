const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  status: { type: String, enum: ['Not Started', 'Reading', 'Completed'], default: 'Not Started' }
});

module.exports = mongoose.model('Book', BookSchema);
