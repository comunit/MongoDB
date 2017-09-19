const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Books Schema
const BookSchema = new Schema ({
  title: String,
  pages: Number
});


//Create schema and model
const AuthorSchema = new Schema ({
  name: String,
  age: Number,
  books: [BookSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;