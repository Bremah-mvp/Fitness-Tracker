const express = require('express');

const router = express.Router();

const db = require('..models');

router.get('/', async (req, res) => {
    try {
        const fitness = await db.fitness.find({});
        console.log('from api fitness route');
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

