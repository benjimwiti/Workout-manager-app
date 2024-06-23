const Workout = require('../../models/workout')

const fetchWorkouts = async ( req, res) => {
    const allWorkouts = await Workout.find({}).sort({createdAt : -1})
    res.json(allWorkouts)
}

module.exports = fetchWorkouts