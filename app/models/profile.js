'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    homeAddress1: String,
    homeAddress2: String,
    homeCity: String,
    homeState: String,
    homeZip: Number,
    company: String,
    // favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    // following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // hash: String,
    // salt: String,
    phoneNumber: Number,
    // topSkills: Array,
    // skills: Array,
    profilePrivacy: String,
    workExperience: [{
        position: String,
        city: String,
        state: String,
        description: String,
        fromMonth: Date,
        toMonth: Date,
        currentlyWorksHere: Boolean
    }],
    degreeName: String,
    schoolName: String,
    schoolCity: String,
    nextJobTitle: String,
    authorization: String,
    nextTypeofEmployment: String,
    nextSalary: Number,
    nextSalaryTimeFrame: Number

});

module.exports = mongoose.model('Profile', ProfileSchema);
