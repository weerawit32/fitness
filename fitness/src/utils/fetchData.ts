import axios from "axios";
export {};

type exerciseOptionsType = {
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};

export const options = {
  headers: {
    "X-RapidAPI-Key": "d0853c564fmsh8203a932eeab1a2p1e3d5ejsne6c5e4895657",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (
  url: string,
  exerciseOptions: exerciseOptionsType
): Promise<string[]> => {
  const { data } = await axios.get(url, exerciseOptions);

  return data;
};

// "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
