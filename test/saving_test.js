const assert = require('assert');
const MarioChar = require('../models/mariochar');

// descripe test
describe('Saving records', function () {

   //create tests
   it('Saves a record to database', function(done){
     var char = new MarioChar({
       name: 'mario'
     });

     char.save().then(function(){
       assert(char.isNew === false);
       done();
     });

   });

});