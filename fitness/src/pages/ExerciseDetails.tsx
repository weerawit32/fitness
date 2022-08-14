import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllData, innerData } from "../utils/fetchAll";
import { options } from "../utils/fetchData";
import { fetchById } from "../utils/fetchById";
export {};

export const ExerciseDetails = () => {
  const [exerciseById, setExerciseById] = useState<innerData | null>({});
  const { id } = useParams();

  useEffect(() => {
    const fetchById = async () => {
      const exerciseById = await fetchById(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        options
      );
      setExerciseById(exerciseById);
      console.log(exerciseById);
    };
    fetchById();
  }, []);

  return (
    <div>
      <h1>Exercise details</h1>
    </div>
  );
};
