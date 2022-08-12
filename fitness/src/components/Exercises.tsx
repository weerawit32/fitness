import { allData } from "../utils/fetchAll";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export {};

export const Exercises = ({ exercises }: { exercises: allData }) => {
  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={exercises[0].gifUrl} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  <div>{exercises[0].equipment} test</div>
    </div>
   
  );
};
