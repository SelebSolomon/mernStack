import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error("useWorkoutContext must be used in a WorkoutContextProvider");
  }

  return context;
};

export default useWorkoutContext;
