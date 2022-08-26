import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { innerData } from "../utils/fetchAll";
import { options } from "../utils/fetchAll";
import { fetchById } from "../utils/fetchAll";
import { youtubeFetch, youtubeOptions, Content } from "../utils/fetchAll";
import { ExerciseVideo } from "../components/ExerciseVideo";
export {};

export const ExerciseDetails = () => {
  const [exerciseDataById, setExerciseDataById] = useState<innerData>(
    {} as innerData
  );
  const [youtubeData, setYoutubeData] = useState<Content[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchByIds = async () => {
      const exerciseById = await fetchById(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        options
      );
      setExerciseDataById(exerciseById);

      const youtubeFetchData = await youtubeFetch(
        `https://youtube138.p.rapidapi.com/search/?q=${exerciseById.name}`,
        youtubeOptions
      );
      setYoutubeData(youtubeFetchData.contents);
      console.log(youtubeFetchData);
      console.log(exerciseById);
    };
    fetchByIds();
  }, [id]);

  return (
    <div>
      <h1>Exercise details</h1>
      <div className="d-flex">
        {youtubeData ? (
          youtubeData
            .slice(0, 3)
            .map((data, idx) => <ExerciseVideo key={idx} data={data} />)
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};
