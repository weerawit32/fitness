import React from "react";
import { useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";
import { BodyPartList } from "../components/BodypartList";
import { fetchAllData } from "../utils/fetchAll";
import { Exercises } from "../components/Exercises";
import { allData } from "../utils/fetchAll";

export const Home: React.FC = () => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [exercises, setExcercises] = useState<allData>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const bodyPartsFetch = async () => {
      const bodyPartList = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );

      setBodyParts(bodyPartList);
      console.log(bodyPartList);
    };

    bodyPartsFetch();
  }, []);

  const searchExercises = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchAllData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      const exercisesMatched = exercisesData.filter(
        (item) =>
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search)
      );
      setExcercises(exercisesMatched);
      setSearch("");

      console.log(exercisesData);
      console.log(exercisesMatched);
    }
  };
  // const onSubmit = (
  //   e: React.FormEvent<HTMLFormElement>,
  //   search: string
  // ): void => {
  //   e.preventDefault();

  //   const exercisesDataFetch = async () => {
  //     const exercisesData = await fetchAllData(
  //       "https://exercisedb.p.rapidapi.com/exercises",
  //       options
  //     );
  //     const exercises = exercisesData.filter;
  //     console.log(exercisesData);
  //   };
  //   exercisesDataFetch();
  // };

  return (
    <div>
      <BodyPartList bodyParts={bodyParts} />
      <form onSubmit={searchExercises} className="mt-5">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
      {/* (exercises.length ? {exercises[0].bodyPart} : "") */}
      {exercises.length > 1 && <Exercises exercises={exercises} />}
    </div>
  );
};
