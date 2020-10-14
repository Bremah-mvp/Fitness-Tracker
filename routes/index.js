const express = require('express');

const workoutsRoutes = require('./fitness');

const router = express.Router();

router.use('/fitness', fitnessRoutes);

module.exports = router;