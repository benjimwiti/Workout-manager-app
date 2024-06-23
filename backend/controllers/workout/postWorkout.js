const Workout = require('../../models/workout')

const postWorkout = async ( req, res) => {
    const { title, reps, load } = req.body

    let emptyFields = []

    if (!title) {
      emptyFields.push('title')
    }
    if (!reps) {
      emptyFields.push('reps')
    }
    if (!load) {
      emptyFields.push('load')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    const newWorkout = new Workout({
        title,
        reps,
        load
    })

    try {
        const workout = await newWorkout.save()
        res.json(workout)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = postWorkout