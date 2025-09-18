import {  useEffect } from "react";
import {useWorkoutContext} from "../hooks/useWorkoutContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
const {workouts, dispatch} = useWorkoutContext()
useEffect(() => {
  // 1️⃣ log when fetch starts
  const url = "/api/v1/workouts";
  console.log("Fetching workouts from", url);

  const fetchedData = async () => {
    try {
      // 2️⃣ try/catch added so errors show up in console instead of silently failing
      const res = await fetch(url);

      // 3️⃣ log the HTTP status so we know if it’s 200, 404, 500, etc.
      console.log("Response status:", res.status);

      // 4️⃣ log the JSON so we see its shape
      const data = await res.json();

      // 5️⃣ dispatch with correct payload shape
      // (data.data?.data handles APIs like {data: {data: []}})
      if (res.ok) {
        dispatch({
          type: "SET_WORKOUTS",
          payload: data.data.data
          // payload: Array.isArray(data.data) ? data.data : data.data.data

        });
      } else {
        console.error("Fetch failed:", res.status, data);
      }
    } catch (err) {
      // 6️⃣ log any network / parsing error
      console.error("Error fetching workouts:", err);
    }
  };

  fetchedData();
}, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
