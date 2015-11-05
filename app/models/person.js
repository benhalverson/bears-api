'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
  name: String,
  email: String,
  age: Number,

});

module.exports = mongoose.model('Person', PersonSchema);
