import { allData } from "../utils/fetchAll";
export {};

export const Exercises = ({ exercises }: { exercises: allData }) => {
  return <div>{exercises[0].equipment} test</div>;
};
