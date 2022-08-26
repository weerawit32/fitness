import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Content } from "../utils/fetchAll";

export const ExerciseVideo = ({ data }: { data: Content }) => {
  return (
    <Card className="mx-3" style={{ width: "25rem" }}>
      <a href={`https://www.youtube.com/watch?v=${data.video.videoId}`}>
        <Card.Img variant="top" src={data.video.thumbnails[0].url} />
      </a>
      <Card.Body>
        <Card.Title>{data.video.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
