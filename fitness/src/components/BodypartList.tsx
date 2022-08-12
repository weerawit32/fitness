import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { BodyPart } from "./BodyPart";
import { Dispatch, SetStateAction } from 'react';
export {};

type bodyPartListPropsType = {
  bodyParts: string[];
  selectPart: Dispatch<SetStateAction<string>>;
}

export const BodyPartList = ({ bodyParts, selectPart }:  bodyPartListPropsType ) => {
  return (
    <div>
      Choose your body part target- from bodyPartList
      <div>


        {bodyParts.map((bodyPart: string) => (
          <Button key={bodyPart} onClick={(e) => selectPart(bodyPart)} variant="primary">
            {bodyPart}
          </Button>
        ))}
      </div>
      {/* {bodyParts.map((bodyPart: string) => (
        <BodyPart key={bodyPart} bodyPart={bodyPart} />
      ))} */}
    </div>
  );
};
