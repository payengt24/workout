const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .sort({ day: 1 })
        .then((dbWorkout) => {
            res.json(dbWorkout.map((w) => w.toObject({virtuals: true})));
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/exercises", (req, res) => {

})

module.exports = router;