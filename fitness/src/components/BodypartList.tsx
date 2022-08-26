import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { BodyPart } from "./BodyPart";
import { Dispatch, SetStateAction } from "react";
export {};

type bodyPartListPropsType = {
  bodyParts: string[];
  selectPart: Dispatch<SetStateAction<string>>;
};

export const BodyPartList = ({
  bodyParts,
  selectPart,
}: bodyPartListPropsType) => {
  return (
    <div>
      Choose your body part target
      <div className="my-3">
        {bodyParts.map((bodyPart: string) => (
          <Button
            className="mx-2"
            key={bodyPart}
            onClick={(e) => selectPart(bodyPart)}
            variant="primary"
          >
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
