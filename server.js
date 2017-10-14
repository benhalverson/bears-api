'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var cors = require('cors');
// var Bear = require('./app/models/bear');
// var Person = require('./app/models/person');
const Profile = require('./app/models/profile');
var db = require('./config/db');

mongoose.Promise = global.Promise;
mongoose.connect(db.url, db.useMongoClient, db.server.auto_reconnect)
    .then(() => console.log(`Connected to Database`))
    .catch((err) => console.error(`Failed to connect ${err}`));

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

// router.route('/profile/new')
//   .post((req, res) => {
//   var person = new Person();
//   person.username = req.body.username;
//   person.name = req.body.name;
//   person.email = req.body.email;
//   person.age = req.body.age;
//
//   //save a person
//   person.save(function(err){
//     if(err) {
//       console.error('oh noes ', err);
//       res.send(err);
//     } else {
//       res.json(person);
//     }
//   });
// })
//   // get a list of people
//   .get(function(req, res){
//     Person.find(function(err, person){
//       if(err) {
//         console.error(err);
//       } else {
//         res.json(person);
//       }
//     });
//   });

//
// router.route('/bears').post(function(req, res){
//     // create a new instance of the Bear model
//     var bear = new Bear();
//     // set the bears name. This comes from the req.
//     bear.name = req.body.name;
//     bear.type = req.body.type;
//     bear.location = req.body.location;
//     bear.foo = req.body.foo;
//     // save the bear and check for errs
//
//     bear.save(function(err) {
//       if(err) {
//         res.send(err);
//
//       } else {
//         res.json(bear);
//       }
//     });
//   })
//   .get(function(req, res){
//     Bear.find(function(err, bears){
//       if(err){
//         res.send(err);
//
//       } else {
//         res.json(bears);
//       }
//     });
//   });
//
// router.route('/bears/:bear_id')
//
//     // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
//     .get(function(req, res) {
//         Bear.findById(req.params.bear_id, function(err, bear) {
//           if (err) {
//             res.send(err);
//
//           } else {
//             res.json(bear);
//           }
//
//         });
//     })
//     .put(function(req, res){
//       Bear.findById(req.params.bear_id, function(err, bear){
//         if(err){
//           res.send(err);
//         } else {
//           bear.name = req.body.name;
//           bear.type = req.body.type;
//           bear.location = req.body.location;
//           bear.save(function(err){
//             if(err){
//               res.send(err)
//             } else{
//               res.json(bear);
//             }
//           });
//         }
//       });
//     })
//     .delete(function(req, res){
//       Bear.remove({_id: req.params.bear_id}, function(err, bear){
//         if(err){
//           res.send(err)
//         } else {
//           res.json({message: 'Successfully deleted'});
//         }
//       });
//     });

// more routes for our api will happen here



router.route('/profile').post((req, res) => {
    // create a new instance of the Bear model
    let p = new Profile();
    // set the bears name. This comes from the req.
    p.userName = req.body.userName;
    p.firstName = req.body.firstName;
    p.lastName = req.body.lastName;
    p.email = req.body.email;
    p.homeAddress1 = req.body.homeAddress1;
    p.homeAddress2 = req.body.homeAddress2;
    p.homeCity = req.body.homeCity;
    p.homeState = req.body.homeState;
    p.homeZip = req.body.homeZip;
    p.phoneNumber = req.body.phoneNumber;
    p.userPrivacy = req.body.userPrivacy;
    // p.workExperience = req.body.workExperience;
    p.position = req.body.position;
    p.company = req.body.company;
    p.description = req.body.description;
    p.fromMonth = req.body.fromMonth;
    p.toMonth = req.body.toMonth;
    p.bio = req.body.bio;
    p.city = req.body.city;
    p.state = req.body.state;
    // save the bear and check for errs
    p.save()
        .then((p) => res.json(p))
        .catch(e => console.log(e._message));
})
    .get(function(req, res){
        Profile.find(function(err, p){
            if(err){
                res.send(err);

            } else {
                res.json(p);
            }
        });
    });

router.route('/profile/:p_id')
    .get((req, res) => {
        Profile.findById(req.params.p_id, (err, p) => {
          res.json(p);
        })

    })
    .put((req, res) => {
        Profile.findById(req.params.p_id, (err, p) => {
            p.userName = req.body.userName;
            p.firstName = req.body.firstName;
            p.lastName = req.body.lastName;
            p.email = req.body.email;
            p.phoneNumber = req.body.phoneNumber;
            p.userPrivacy = req.body.userPrivacy;
            p.position = req.body.position;
            p.company = req.body.company;
            p.bio = req.body.bio;
            p.city = req.body.city;
            p.state = req.body.state;

            p.save()
                .then((p) => res.json(p))
                .catch(err => console.log(err))
        });

    })

//router.route('/profile/:p_id')
    .delete((req, res) => {
        Profile.remove({_id: req.params.p_id})
            .then(res.json({message: 'deleted'}))
            .catch(err => console.log(err));
    });
// registering our routing
// prefix routes with /api
app.use('/api', router);

//  start the server
app.listen(port);

console.log('server started on port: ' + port);
