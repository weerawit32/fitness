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

export const youtubeOptions = {
 
  headers: {
    'X-RapidAPI-Key': 'd0853c564fmsh8203a932eeab1a2p1e3d5ejsne6c5e4895657',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const options = {
  headers: {
    "X-RapidAPI-Key": "d0853c564fmsh8203a932eeab1a2p1e3d5ejsne6c5e4895657",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeFetch = async (url: string, youtubeOptions:any): Promise<any> => {
    try {
        const { data} = await axios.get(url, youtubeOptions);
        return data;
      }catch(error){
        console.log(error);
        throw(error);
      }
}


export const fetchData = async (
  url: string,
  exerciseOptions: exerciseOptionsType
): Promise<string[]> => {
  const { data } = await axios.get(url, exerciseOptions);

  return data;
};

export const fetchById = async (
  url: string,
  exerciseOptions: exerciseOptionsType
): Promise<innerData> => {
  const { data } = await axios.get(url, exerciseOptions);

  return data;
};

export const fetchAllData = async (
  url: string,
  exerciseOptions: exerciseOptionsType
): Promise<allData> => {
  const { data } = await axios.get(url, exerciseOptions);

  return data;
};
