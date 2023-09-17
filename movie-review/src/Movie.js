import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "./Modal";


function Movie(props) {
    const [reviewData, setReviewData] = React.useState([
        {
          userName: "Layla",
          userReview: "This movie is so scary! I love it!",
          rating: "5⭐",
        },
        {
          userName: "Penelope",
          userReview: "Too scary. Had nightmares for days",
          rating: "1⭐",
        },
      ]);

  return (
    <Card bg="black" text="white" className="movie-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="movie-title">{props.title}</Card.Title>
        <Card.Subtitle className="movie-year">{props.year}</Card.Subtitle>
        <hr />
        <Card.Text className="movie-details">
          <b>Director:</b> {props.director}
          <br />
          <b>Writer:</b> {props.writer}
          <br />
          <b>Starring:</b> {props.actors}
          <br />
          <hr />
          {props.synopsis}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Modal
          title={props.title}
          reviewData={reviewData}
          setReviewData={setReviewData}
        />
      </Card.Footer>
    </Card>
  );
}
export default Movie