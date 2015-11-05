'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var cors = require('cors');
var Bear = require('./app/models/bear');
var Person = require('./app/models/person');
var db = require('./config/db');

mongoose.connect(db.url);
// setting port number
var port = process.env.PORT || 3000;


app.use(cors());
// configure bodyParser()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes setup
var router = express.Router();

router.get('/about', function(req, res){
  res.json({message: 'New api endpoint works'});
});





router.get('/', function(req, res) {
  res.json({message: 'api is working!'});
});

router.get('/search', function(req, res){
  var query
  Person.find({});
})
router.route('/person')
  .post(function(req, res){
  var person = new Person();
  person.name = req.body.name;
  person.email = req.body.email;
  person.age = req.body.age;

  //save a person
  person.save(function(err){
    if(err) {
      console.error('oh noes ', err);
      res.send(err);
    } else {
      res.json({message: 'Person added to database'});
    }
  });
})
  // get a list of people
  .get(function(req, res){
    Person.find(function(err, person){
      if(err) {
        console.error(err);
      } else {
        res.json(person);
      }
    });
  });


router.route('/bears').post(function(req, res){
    // create a new instance of the Bear model
    var bear = new Bear();
    // set the bears name. This comes from the req.
    bear.name = req.body.name;
    bear.type = req.body.type;
    bear.location = req.body.location;
    // save the bear and check for errs

    bear.save(function(err) {
      if(err) {
        res.send(err);

      } else {
        res.json({message: 'Bear Created'});
      }
    });
  })
  .get(function(req, res){
    Bear.find(function(err, bears){
      if(err){
        res.send(err);

      } else {
        res.json(bears);
      }
    });
  });

router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
          if (err) {
            res.send(err);

          } else {
            res.json(bear);
          }

        });
    })
    .put(function(req, res){
      Bear.findById(req.params.bear_id, function(err, bear){
        if(err){
          res.send(err);
        } else {
          bear.name = req.body.name;
          bear.save(function(err){
            if(err){
              res.send(err)
            } else{
              res.json({message: 'Bear updated!' });
            }
          });
        }
      });
    })
    .delete(function(req, res){
      Bear.remove({_id: req.params.bear_id}, function(err, bear){
        if(err){
          res.send(err)
        } else {
          res.json({message: 'Successfully deleted'});
        }
      });
    });

// more routes for our api will happen here

// registering our routing
// prefix routes with /api
app.use('/api', router);

//  start the server
app.listen(port);

console.log('server started on port: ' + port);
