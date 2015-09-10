'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-Parser');

 // configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.json());

var port = process.env.PORT || 3000  //setting port number


//routes setup
var router = express.Router();


router.get('/', function(request, response) {
  response.json({ message: 'api is working!'});
});

//TODO more routes for our api will happen here

//registering our routing
//prefix routes with /api
app.use('/api', router);


//  start the server
app.listen(port);

console.log('server started on port: ' + port);
