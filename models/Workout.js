

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
                required:  'Enter an exercise type.'
            },
            name: {
                type: String,
                trim: true,
                required:  'Enter an exercise name.'

            },
            distance: {
                type: Number,
                trim: true,

            },
            duration: {
                type: Number,
                trim: true,
                required: 'Enter an exercise duration in minutes.'
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
},
    {
        toJSON: {
          // include any virtual properties when data is requested
          virtuals: true
        }
      }
    );
    
    // adds a dynamically-created property to schema
    workoutSchema.virtual("totalDuration").get(function() {
      // "reduce" array of exercises down to just the sum of their durations
      return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
    

});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
