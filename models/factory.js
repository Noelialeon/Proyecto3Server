
const mongoose = require('mongoose');
/* eslint-disable */
const Schema = mongoose.Schema;
const User = require('./user.js');

const factorySchema = new Schema(
  {
    companyName: String,
    address: String,
    zipcode: String,
    city: String,
    country: String,
    activity: String,
    billing: String,
    lat: Number,
    long: Number,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Factory = mongoose.model('Factory', factorySchema);
module.exports = Factory;
