module.exports = {};

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter either cardio or resistance type",
                trim: true
            },
            name: {
                type: String,
                required: "Please enter name of the workout",
                trim: true
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }    
    ],
});

WorkoutSchema.virtual("totalDuration").get(function() {
    let total = 0;
    this.exercises.forEach(e => {
        total += e.duration;
    });
    return total;
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
