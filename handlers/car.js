const db = require('../models');

exports.showCars = async (req, res, next) => {
  try {
    const cars = await db.Car.find();
      res.status(200).json(cars)
  } catch (err) {
    err.status = 400;
    next(err);
  }
}