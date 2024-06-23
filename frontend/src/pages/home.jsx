import { useEffect, useState } from "react"
import axios from 'axios'

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import { WorkoutContext } from "../context/WorkoutContext"

const Home = () => {
  const {workouts, dispatch} = useWorkoutContext(WorkoutContext)

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/workouts')
        const workouts = response.data
        dispatch({type : 'SET_WORKOUTS', payload: workouts})
        
      } catch (error) {
        console.log(error)
      }
      
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home