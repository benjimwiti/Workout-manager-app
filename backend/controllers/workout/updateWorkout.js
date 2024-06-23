const { ObjectId } = require('mongodb')
const Workout = require('../../models/workout')
const { request } = require('express')

const updateWorkout = async ( req, res) => {
    const { id : WorkoutId } = req.params
    if(!ObjectId.isValid(WorkoutId)) {
        return res.json({err : `check your request url`})
    }

    try {
        const requestedWorkout = await Workout.findOneAndUpdate(
            {_id : WorkoutId}, 
            {...req.body}, 
            {returnOriginal : false}
        )
        requestedWorkout ? res.json(requestedWorkout) : res.json('workout not found')
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = updateWorkout