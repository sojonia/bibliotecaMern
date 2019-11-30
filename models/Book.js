// Deconstructing
const { Schema, model } = require("mongoose");

// Defining schema for book
const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  }
});

// Compiling our schema into a Model.
module.exports = model('Book', bookSchema);
