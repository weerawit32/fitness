import React from "react";
import { useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";
import { BodyPartList } from "../components/BodypartList";
import { fetchAllData } from "../utils/fetchAll";

export const Home: React.FC = () => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [term, setTerm] = useState('');
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

  useEffect(() => {
    const exercisesDataFetch = async () => {
      const exercisesData = await fetchAllData("https://exercisedb.p.rapidapi.com/exercises", options);

      console.log(exercisesData)

    }

    exercisesDataFetch();
  }, [])

  return (
    <div>

      <BodyPartList bodyParts={bodyParts} />
      <form className="mt-5">
        <input value={term} onChange={(e) => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
};
