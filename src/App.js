import AddModal from "./components/AddModal";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <div className="movie">
          <Card style={{ with: "10rem" }}>
            <Card.Img variant="top" src="spectre.jpg" />
            <Card.Body>
              <Card.Title>Harry Potter 7</Card.Title>
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
