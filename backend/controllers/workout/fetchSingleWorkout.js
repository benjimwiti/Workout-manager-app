const { ObjectId } = require('mongodb')
const Workout = require('../../models/workout')

const fetchSingleWorkout = async ( req, res) => {
    const { id : WorkoutId } = req.params
    if(!ObjectId.isValid(WorkoutId)) {
        return res.json({err : `check your request url`})
    }
    try {
        const requestedWorkout = await Workout.findById(WorkoutId)
        res.json(requestedWorkout)
    } catch (error) {
        console.log(error)
    }
}

module.exports = fetchSingleWorkout