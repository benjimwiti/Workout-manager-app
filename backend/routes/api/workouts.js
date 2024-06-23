const express = require('express')
const router = express.Router()
const fetchWorkouts = require('../../controllers/workout/fetchWorkouts')
const fetchSingleWorkout = require('../../controllers/workout/fetchSingleWorkout')
const postWorkout = require('../../controllers/workout/postWorkout')
const deleteWorkout = require('../../controllers/workout/deleteWorkout')
const updateWorkout = require('../../controllers/workout/updateWorkout')

router.route('/')
    .get(fetchWorkouts)
    .post(postWorkout)
    
router.route('/:id')
    .get(fetchSingleWorkout)
    .patch(updateWorkout)
    .delete(deleteWorkout)





module.exports = router