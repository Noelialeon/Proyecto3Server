const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const factorySchema = new Schema(
  {
    companyName: String,
    address: String,
    zipcode: String,
    country: String,
    activity: String,
    billing: String,
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
