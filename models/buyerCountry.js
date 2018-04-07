const mongoose = require('mongoose');
/* eslint-disable */
const Schema = mongoose.Schema;

const BuyerCountrySchema = new Schema({
  value: Number,
  sourceCountry: String,
  destinationCountry: String,
  typeOfWeapon: String,
  category: String,
},
{ collection : 'buyerCountries' }
);

const BuyerCountry = mongoose.model("BuyerCountry", BuyerCountrySchema);
module.exports = BuyerCountry;
//mirar conectar mongo schema con collection