import React from "react";
import { useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";
import { BodyPartList } from "../components/BodypartList";
import { fetchAllData } from "../utils/fetchAll";
import { Exercises } from "../components/Exercises";
import { allData } from "../utils/fetchAll";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Home: React.FC = () => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [exercises, setExcercises] = useState<allData>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(1);

  // Pagination
  const itemsPerPage: number = 9;
  const lastindexOfItems = itemsPerPage * page;
  const firstIndexOfItems = lastindexOfItems - itemsPerPage;

  console.log(lastindexOfItems, firstIndexOfItems);
  const maxPageNumber = Math.ceil(exercises.length / itemsPerPage);

  const renderedExercises = exercises.slice(
    firstIndexOfItems,
    lastindexOfItems
  );

  //

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const bodyPartsFetch = async () => {
      const bodyPartList = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );

      setBodyParts(["all", ...bodyPartList]);
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
      setPage(1);

      console.log(exercisesMatched);
    }
  };

  useEffect(() => {
    const bodyPartFetch = async () => {
      let exercisesData = [];
      if (selectedBodyPart === "all")
        exercisesData = await fetchAllData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      else
        exercisesData = await fetchAllData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          options
        );

      setExcercises(exercisesData);
      console.log(selectedBodyPart);
    };

    bodyPartFetch();
    setPage(1);
  }, [selectedBodyPart]);

  console.log(selectedBodyPart);
  console.log(renderedExercises);
  return (
    <div>
      <BodyPartList bodyParts={bodyParts} selectPart={setSelectedBodyPart} />
      <form onSubmit={searchExercises} className="mt-5">
        <input
          value={search}
          type="text"
          placeholder="search your exercise..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
      {/* (exercises.length ? {exercises[0].bodyPart} : "") */}
      {renderedExercises.length > 0 && (
        <Exercises exercises={renderedExercises} />
      )}
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={maxPageNumber} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};
