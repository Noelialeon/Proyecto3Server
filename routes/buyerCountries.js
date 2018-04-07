const express = require('express');

const router = express.Router();

const BuyerCountry = require('../models/buyerCountry');

router.get('/page/:page', (req, res, next) => {
  const perPage = 15;
  const page = req.params.page || 1;

  BuyerCountry
    .find({})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, countryList) => {
      BuyerCountry
        .count()
        .exec(() => {
          if (err) {
            next(err);
          } else {
            res.status(200).json(countryList);
          }
        });
    });
});

router.get('/country/:country', (req, res, next) => {
  const { country } = req.params;

  BuyerCountry
    .find({ sourceCountry: country })
    .sort({ value: -1 })
    .limit(40)
    .exec((err, countryList) => {
      if (err) {
        next(err);
      } else {
        res
          .status(200)
          .json(countryList);
      }
    });
});

module.exports = router;
