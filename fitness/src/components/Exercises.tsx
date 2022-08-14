import { allData } from "../utils/fetchAll";
import Row from "react-bootstrap/Row";
import { ExerciseCard } from "./ExerciseCard";
export {};

export const Exercises = ({ exercises }: { exercises: allData }) => {
  return (
    <div className="container-fluid">
      <Row>
        {exercises.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}
      </Row>
    </div>
  );
};
