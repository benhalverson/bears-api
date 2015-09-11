'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var Bear = require('./app/models/bear');
var db = require('./config/db');

mongoose.connect(db.url);
// setting port number
var port = process.env.PORT || 3000;

// configure bodyParser()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes setup
var router = express.Router();

router.use(function(req, res, next){
//logging stuff
  console.log('The API is working :o) ');
  next();
});
router.get('/', function(req, res) {
  res.json({message: 'api is working!'});
});

router.route('/bears')
  .post(function(req, res){
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
