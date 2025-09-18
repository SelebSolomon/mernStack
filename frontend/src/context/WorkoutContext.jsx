import { createContext, useReducer } from "react";

// 1️⃣ export the context (this stays the same)
export const WorkoutContext = createContext();

// 2️⃣ reducer stays the same
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        ...state,
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

// 3️⃣ declare the provider as a normal function instead of const arrow
export function WorkoutContextProvider({ children }) {
  const [state, dispatch] = useReducer(workoutReducer, { workouts: [] });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
}
