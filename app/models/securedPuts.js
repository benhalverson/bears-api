'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SecuredPutsSchema = new Schema({
  symbol: String,
  strikePrice: String,
  optionBid: String,
  standStillReturnPercent: String,
  stockPriceMin: String,
  stockPriceMax: String
});

module.exports = mongoose.model('SecuredPuts', SecuredPutsSchema);
