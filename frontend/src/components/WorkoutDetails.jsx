import {useWorkoutContext} from "../hooks/useWorkoutContext";
import DeleteIcon from '@mui/icons-material/Delete';


const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWorkoutContext()
  const handleClick = async ( )=> {
    
     const url = "/api/v1/workouts/" + workout._id;
    const response = await fetch(url, {
      method: "DELETE"
  });
  const json = await response.json()
  console.log(json)

dispatch({type: 'DELETE_WORKOUT', payload: workout})
}
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}><DeleteIcon /></span>
    </div>
  );
};

export default WorkoutDetails;
