import React from 'react';
import AddModal from "./components/AddModal";
import ListMovies from "./components/ListMovies";
import "./App.css";
import { Card } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    movies : [
      {
        id: uuidv4(),
        name : "inception",
        image : "bubby.jpg",
        rating : 4,
        year : "2008"
      },
      {
        id: uuidv4(),
        name : "burn out",
        image : "avenger.jpg",
        rating : 5,
        year : "2013"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie App</h1>
          <ListMovies movies={this.state.movies}/>
          <div className="movie">
            <Card style={{ with: "18rem" }}>
              <Card.Img variant="top" src="spectre.jpg" />
              <Card.Body>
                <Card.Title>Fury Man</Card.Title>
                <Card.Text>2014</Card.Text>
                <Card.Text>3</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <AddModal />
        </header>
    </div>
    );
  }
}

export default App;

/**
 * Create the following components:
MovieCard
MovieList
Filter ( title, rate)
Every movie should have the following attributes: title, description, posterURL, rating
The user should be:
Able to add a new movie.
Filter the movies with title/rating.
 */
