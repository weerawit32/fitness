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

export interface YoutubeResult {
  contents: Content[];
  cursorNext: string;
  didYouMean: null;
  estimatedResults: number;
  filterGroups: FilterGroup[];
  refinements: string[];
}

export interface Content {
  type: ContentType;
  video: Video;
}

export enum ContentType {
  Video = "video",
}

export interface Video {
  author: Author;
  badges: BadgeEnum[];
  descriptionSnippet: null | string;
  isLiveNow: boolean;
  lengthSeconds: number;
  movingThumbnails: Thumbnail[] | null;
  publishedTimeText: null | string;
  stats: Stats;
  thumbnails: Thumbnail[];
  title: string;
  videoId: string;
}

export interface Author {
  avatar: Thumbnail[];
  badges: BadgeClass[];
  canonicalBaseUrl: null | string;
  channelId: string;
  title: string;
}

export interface Thumbnail {
  height: number;
  url: string;
  width: number;
}

export interface BadgeClass {
  text: Text;
  type: BadgeType;
}

export enum Text {
  OfficialArtistChannel = "Official Artist Channel",
  Verified = "Verified",
}

export enum BadgeType {
  OfficialArtistChannel = "OFFICIAL_ARTIST_CHANNEL",
  VerifiedChannel = "VERIFIED_CHANNEL",
}

export enum BadgeEnum {
  Cc = "CC",
  The4K = "4K",
}

export interface Stats {
  views: number;
}

export interface FilterGroup {
  filters: Filter[];
  title: string;
}

export interface Filter {
  cursorSelect: null | string;
  label: string;
  selected: boolean;
}

export type allData = innerData[];

export const youtubeOptions = {
  headers: {
    "X-RapidAPI-Key": "d0853c564fmsh8203a932eeab1a2p1e3d5ejsne6c5e4895657",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const options = {
  headers: {
    "X-RapidAPI-Key": "d0853c564fmsh8203a932eeab1a2p1e3d5ejsne6c5e4895657",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeFetch = async (
  url: string,
  youtubeOptions: exerciseOptionsType
): Promise<YoutubeResult> => {
  try {
    const { data } = await axios.get(url, youtubeOptions);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

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
