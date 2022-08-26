import { allData } from "../utils/fetchAll";
import { ExerciseCard } from "./ExerciseCard";
export {};

export const Exercises = ({ exercises }: { exercises: allData }) => {
  return (
    <div className="container-fluid d-flex flex-wrap">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
    </div>
  );
};
