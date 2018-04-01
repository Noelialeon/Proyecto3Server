const express = require('express');

const router = express.Router();
const Factory = require('../models/factory');

router.get('/private-profile', (req, res) => {
  res.status(200).json({ message: 'Hola estas en la ruta privada' });
});

router.get('/arms-factory', (req, res, next) => {
  Factory.find({}, (err, factoryList) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(factoryList);
    }
  });
});

router.post('/arms-factory', (req, res, next) => {
  const newFactory = new Factory({
    companyName: req.body.companyName,
    address: req.body.address,
    zipcode: req.body.zipcode,
    country: req.body.country,
    activity: req.body.activity,
    billing: req.body.billing,
    // user_id: req.user.currentUser,
  });

  newFactory.save((err) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ Factory: newFactory });
    }
  });
});

router.get('/arms-factory/:id', (req, res, next) => {
  const { id } = req.params;

  Factory.findById(id, (err, factory) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(factory);
    }
  });
});

router.put('/arms-factory/:id', (req, res, next) => {
  const { id } = req.params;
  const factoryToUpdate = {
    companyName: req.body.companyName,
    address: req.body.address,
    zipcode: req.body.zipcode,
    country: req.body.country,
    activity: req.body.activity,
    billing: req.body.billing,
  };

  Factory.findByIdAndUpdate(id, factoryToUpdate, (err) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ message: 'updated' });
    }
  });
});

router.delete('/arms-factory/:id', (req, res, next) => {
  const { id } = req.params;

  Factory.remove({ _id: id }, (err) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ message: 'deleted' });
    }
  });
});

module.exports = router;
