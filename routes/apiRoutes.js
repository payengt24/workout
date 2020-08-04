const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .sort({ day: 1 })
        .then((dbWorkout) => {
            res.json(dbWorkout.map((w) => w.toObject({ virtuals: true })));
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
    )
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;