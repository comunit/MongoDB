const mongoose = require('mongoose');
//ES6 Promise
mongoose.Promise = global.Promise;

//Connect to database before test run
before(function (done) {
  //Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo',{useMongoClient: true});

  mongoose.connection.once('open', function () {
    console.log('connection has been made, now make fireworks....');
    done();
  }).on('error', function (error) {
    console.log('connection error:', error);
  });
});

//Drop the characters before each test
beforeEach(function (done) {
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});