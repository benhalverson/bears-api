'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BearSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  location: {type: String, required: true}

});

module.exports = mongoose.model('Bear', BearSchema);
