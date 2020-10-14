const express = require('express');

const workoutsRoutes = require('./workout');

const router = express.Router();

router.use('/workout', workoutRoutes);

module.exports = router;