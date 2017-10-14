'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BearSchema = new Schema({
  name: String, //{type: String, required: true},
  type: String, //{type: String, required: true},
  location: String, //{type: String, required: true},
  foo: String
});

module.exports = mongoose.model('Bear', BearSchema);
