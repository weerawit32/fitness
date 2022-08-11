import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BodyPart } from "./BodyPart";
export {};

export const BodyPartList = ({ bodyParts }: { bodyParts: string[] }) => {
  return (
    <div>
      Choose your body part target- from bodyPartList
      <div>
        <Link to="test">Test</Link>

        {bodyParts.map((bodyPart: string) => (
          <Button key={bodyPart} variant="primary">
            {bodyPart}
          </Button>
        ))}
      </div>
      {bodyParts.map((bodyPart: string) => (
        <BodyPart key={bodyPart} bodyPart={bodyPart} />
      ))}
    </div>
  );
};
