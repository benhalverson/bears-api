/**
 * Created by bhalvers on 5/25/16.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CoveredCallSchema = new Schema({
	symbol: String,
	strike: Number,
	stockPrice: Number,
});

module.exports = mongoose.model('CoveredCall', CoveredCallSchema);