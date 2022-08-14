import axios from "axios";
export {};

type exerciseOptionsType = {
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};

export type innerData = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

export type allData = innerData[];

export const fetchById = async (
  url: string,
  exerciseOptions: exerciseOptionsType
): Promise<innerData> => {
  const { data } = await axios.get(url, exerciseOptions);

  return data;
};
