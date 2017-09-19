const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){

  var char

  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(function(){
      done();
    })
  });

  // Create tests
  it('Updates one record in the database', function(done){

   MarioChar.findOneAndUpdate(
     {name:'Mario'},
     {name: 'Imran'}
   ).then(function(){
     MarioChar.findOne({_id: char._id}).then(function(result){
       assert(result.name === 'Imran');
       done();
     })
   });

  });

  // Create tests
  it('Increment weight by 1', function(done){

   MarioChar.update({}, {$inc: {weight: 1}}).then(function(){
     MarioChar.findOne({name: 'Mario'}).then(function (record) {
       assert(record.weight === 51);
       done();
     })
   })

  });
});