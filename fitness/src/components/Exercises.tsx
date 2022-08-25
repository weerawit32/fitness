import { allData } from "../utils/fetchAll";
import Row from "react-bootstrap/Row";
import { ExerciseCard } from "./ExerciseCard";
export {};

export const Exercises = ({ exercises }: { exercises: allData }) => {
  return (
    <div className="container-fluid d-flex flex-wrap">
      {/* <Row> */}
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      {/* </Row> */}
    </div>
  );
};
