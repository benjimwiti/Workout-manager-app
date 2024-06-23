import { Children, createContext, useReducer } from "react";

export const WorkoutContext = createContext()

const workoutReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WORKOUTS' :
            return {
                workouts : action.payload
            }
        case 'CREATE_WORKOUT' :
            return {
                workouts : [action.payload, ...state.workouts]
            }
        case 'DELETE_REFRESH' :
            return {
                workouts : state.workouts.filter((workout) => workout._id !== action.payload._id)
            }
        default :
            return state

    }
}

export const WorkoutContextProvider = ({children}) => {

    const initialState = {
        workouts : null
    }
    const [state, dispatch] = useReducer(workoutReducer, initialState.workouts)

    return (
        <WorkoutContext.Provider value = { { ...state, dispatch } }>
            {children}
        </WorkoutContext.Provider>

    )
}