

const mongoose = require('mongoose');
const schema = mongoose.schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: 'Date is required'
    },

    excercises: [
        {
            type: {
                type: String,
                trim: true,
                required:  "Enter an exercise type."
            },
            name: {
                type: String,
                trim: true,
                required:  "Enter an exercise name."

            },
            distance: {
                type: Number,
                trim: true,

            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter an exercise duration in minutes."
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

const Workout = mangoose.model('Workout', WorkoutSchema);

module.exports = Workout;
