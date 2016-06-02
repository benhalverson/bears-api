/**
 * Created by bhalvers on 5/25/16.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CoveredCallSchema = new Schema({
	symbol: String,
	strikePrice: String,
	optionBid: String,
	standStillReturnPercent: String,
	stockPriceMin: String,
	stockPriceMax: String


});

module.exports = mongoose.model('CoveredCall', CoveredCallSchema);