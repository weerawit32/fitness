import React from "react";
import { useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";
import { BodyPartList } from "../components/BodypartList";

export const Home: React.FC = () => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);

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
  return (
    <div>
      {/* {bodyParts} */}
      <BodyPartList bodyParts={bodyParts} />
    </div>
  );
};
