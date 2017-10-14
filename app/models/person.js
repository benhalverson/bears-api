'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  bio: String,
  // favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  // following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // hash: String,
  // salt: String,
  phoneNumber: Number,
  city: String,
  state: String,
  topSkills: Array,
  skills: Array,
  profilePrivacy: String,
  position: String,
  description: String,
  fromMonth: Date,
  toMonth: Date,
  currentlyWorksHere: Boolean,
  degreeName: String,
  schoolName: String,
  schoolCity: String,
  nextJobTitle: String,
  authorization: String,
  nextTypeofEmployment: String,
  nextSalary: Number,
  nextSalaryTimeFrame: Number

});

module.exports = mongoose.model('Person', PersonSchema);
