import React from "react";
import AddModal from "./components/AddModal";
import ListMovies from "./components/ListMovies";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "./components/Rating";
import Description from "./components/Description";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
class App extends React.Component {
  state = {
    movies: [
      {
        id: uuidv4(),
        name: "inception",
        image: "bubby.jpg",
        rating: 4,
        year: "2008",
        description: "description"
        },
      {
        id: uuidv4(),
        name: "burn out",
        image: "avenger.jpg",
        rating: 5,
        year: "2013",
        description: "description"
      },
      {
        id: uuidv4(),
        name: "Transformer",
        image: "spectre.jpg",
        rating: 3,
        year: "2017",
        description: "description"
      },
    ],
    searchTerm: "",
  };
  add = (newMovie) => {
    this.setState({
      movies: this.state.movies.concat(newMovie),
    });
  };
  getSearch = (ValueSearch) => {
    this.setState({
      searchTerm: ValueSearch,
    });
  };
  getRating = (ValueRating) => {
    this.setState({
      rating: ValueRating,
    });
  };
  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <h1>Movie App</h1>
          <Rating rating={(R) => this.getRating(R)}/>
            <Router>
              <Switch>
                <Route path="/components/Description" exact component={Description}/>
                <ListMovies movies={this.state.movies}/>           
              </Switch>
            </Router>
            <AddModal addMovie={(M) => this.add(M)}/>
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


================================================================
React Router


We will add a description and the trailer link (embed video link) to the object movie.
Every time I click on a movie card, it will take me to the movie description and trailer page.
In the description page, I can navigate back to the home page.

 */
