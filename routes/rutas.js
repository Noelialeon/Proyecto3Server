const express = require('express');

const router = express.Router();
const Factory = require('../models/factory');

router.get('/private', (req, res) => {
  res.status(200).json({ message: 'Hola estas en la ruta' });
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
  console.log('body', req.body);

  const newFactory = new Factory({
    companyName: req.body.companyName,
    address: req.body.address,
    zipcode: req.body.zipcode,
    country: req.body.country,
    activity: req.body.activity,
    billing: req.body.billing,
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
    brand: req.body.brand,
    model: req.body.model,
    specs: req.body.specs,
    image: req.body.image || '',
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
