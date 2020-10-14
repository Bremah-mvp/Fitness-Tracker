const express = require('express');

const router = express.Router();

const db = require('..models');

router.get('/', async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        console.log('from api workouts route');
        res.json(fitness);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/range', async (req, res) => {
    try {
        const fitness = await db.fitness.find({});
        console.log('from api fitness route');
        res.json(fitness);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/', async (req, res) => {
    console.log("from post routes");
    console.log(req.body);

    try {
        const fitness = req.body;
        fitness.day = Date.now();
        console.log(fitness);
        const result = await db.Fitness.create(fitness);
        res.json(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put('/:id', async (req, res) => {
    console.log('from put route');
    try {
        const exercise = req.body;
        console.log(exercise);
        console.log(req.params.id);
        const result = await db.Fitness.findByIdAndUpdate(
            req.params.id,
            {$push: { exercises: exercise }},
            { new: true}
        );
        res.json(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;

