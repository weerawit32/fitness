import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {innerData } from "../utils/fetchAll";
import { options } from "../utils/fetchAll";
import { fetchById } from "../utils/fetchAll";
import { youtubeFetch, youtubeOptions } from "../utils/fetchAll";
export {};

export const ExerciseDetails = () => {
  const [exerciseById, setExerciseById] = useState<innerData>({} as innerData);
  const { id } = useParams();

  useEffect(() => {
    const fetchByIds = async () => {
      const exerciseById = await fetchById(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        options
      );
      setExerciseById(exerciseById);

      const youtubeFetchData = await youtubeFetch(
        `https://youtube138.p.rapidapi.com/search/?q=${exerciseById.name}`,
        youtubeOptions
      );
      console.log(youtubeFetchData);
      console.log(exerciseById);
    };
    fetchByIds();
  }, [id]);

  return (
    <div>
      <h1>Exercise details</h1>
    </div>
  );
};
