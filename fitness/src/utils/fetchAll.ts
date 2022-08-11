import axios from "axios";
export {};

type exerciseOptionsType = {
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};

type innerData = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

export type allData = innerData[];

export const fetchAllData = async (
  url: string,
  exerciseOptions: exerciseOptionsType
): Promise<allData> => {
  const { data } = await axios.get(url, exerciseOptions);

  return data;
};
