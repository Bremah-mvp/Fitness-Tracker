const { constants } = require("fs");

const mongoose = require('mongoose');
const schema = mongoose.schema;

const FitnessSchema = new schema({
    day: {
        type: Date,
        required: 'Date is required'
    },

    excercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'type is required.'
            },
            name: {
                type: String,
                trim: true,
                required: 'Name is required.'

            },
            distance: {
                type: Number,
                trim: true,

            },
            duration: {
                type: Number,
                trim: true
            },
            weight: {
                type: Number,
                trim: true
            },
            sets: {
                type: Number,
                trim: true
            },
            reps: {
                type: Number,
                trim: true
            }

        }
    ]
});

const Fitness = mangoose.model('Fitness', FitnessSchema);

module.exports = Fitness;
