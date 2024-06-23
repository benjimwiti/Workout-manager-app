import React from 'react'
import axios from 'axios'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

const WorkoutDetails = ({ workout }) => {

  const { workouts, dispatch } = useWorkoutContext()
  const handleClick = async () => {
    try {
      const res = await axios.delete('http://localhost:3000/workouts/'+ workout._id)
      alert(`${res.data.title} deleted successfully`)
      console.log(res.data)
      dispatch({type: 'DELETE_REFRESH', payload: res.data})
      console.log(workouts)
      
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default WorkoutDetails