const router = require('express').Router();

const handle = require('../handlers');

router.route('/')
  .get(handle.showCars);

  module.exports = router;