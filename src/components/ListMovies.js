import React from "react";
import StarRatingComponent from "react-rating-stars-component";
import {Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Link to="/components/Description">
              <Button variant="outline-primary">{el.description}</Button>
              </Link>
                <StarRatingComponent value={el.rating} starCount={5}/>
        </Card.Body>
        </Card>
        </div>

      ))}
    </div>
  );
};

export default ListMovies;
