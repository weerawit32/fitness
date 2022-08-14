import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { innerData } from "../utils/fetchAll";
import { Link } from "react-router-dom";
export {};

export const ExerciseCard = ({ exercise }: { exercise: innerData }) => {
  return (
    <div>
      <Link to={`exercise/${exercise.id}`}>
        <Card
          key={exercise.id}
          className="display-inline-block m-1"
          style={{ width: "25rem" }}
        >
          <Card.Img variant="top" src={exercise.gifUrl} />
          <Card.Body>
            <Card.Title>{exercise.name.toLocaleUpperCase()}</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">{exercise.target}</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
