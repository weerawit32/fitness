import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { innerData } from "../utils/fetchAll";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
export {};

export const ExerciseCard = ({ exercise }: { exercise: innerData }) => {
  return (
    <>
      <div className=" ">
        <Link className="text-decoration-none me-4 d-block " to={`exercise/${exercise.id}`}>
          <Card
            key={exercise.id}
            className="display-inline my-3"
            style={{ width: "25rem" }}
          >
            <Card.Img variant="top" src={exercise.gifUrl} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text className=" text-capitalize  text-dark">
                {exercise.name}
              </Card.Text>
              <Button variant="primary">{exercise.bodyPart}</Button>
              <Button variant="warning">{exercise.target}</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
};
