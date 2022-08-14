import { allData } from "../utils/fetchAll";

import { ExerciseCard } from "./ExerciseCard";
export {};

export const Exercises = ({ exercises }: { exercises: allData }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {exercises.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}
      </div>
    </div>
  );
};
