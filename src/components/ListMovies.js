import React from "react";
import StarRatingComponent from "react-rating-stars-component";
import {Card} from "react-bootstrap";

const ListMovies = (props) => {
  return (
    <div className="listMovies">
      {props.movies.map((el) => (
        <div className="movie">
        <Card style={{ with: "18rem" }}>
          <Card.Img variant="top" src={el.image}/>
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>{el.year}</Card.Text>
            <StarRatingComponent value={el.rating} starCount={5}/>
        </Card.Body>
        </Card>
        </div>
      ))}
    </div>
  );
};

export default ListMovies;
