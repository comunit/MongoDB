const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe test

describe('nesting records', function () {

  beforeEach(function (done) {
    mongoose.connection.collections.authors.drop(function () {
      done();
    });
  });
  // Create tests
  it('Creates an author with sub-documents', function (done) {
    var pat = new Author({
      name: 'Imran Rafique',
      books: [{title: 'fly high', pages: 100}]
    });

    pat.save().then(function () {
      Author.findOne({name: 'Imran Rafique'}).then(function(record){
        assert(record.books.length === 1);
        done();
      });
    });

  });
  it('adds a book author', function (done) {
    var pat = new Author({
      name: 'Imran Rafique',
      books: [{title: 'fly high', pages: 100}]
    });

    pat.save().then(function() {
        Author.findOne({name: 'Imran Rafique'}).then(function(record){
          //add books to books array
          record.books.push({title: 'Fly High Again', pages: 200});
          record.save().then(function(){
            Author.findOne({name: 'Imran Rafique'}).then(function (result) {
              assert(result.books.length === 2);
              done();
            });
          });
        });
    });
  });
});