import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Button variant="outline-primary" onClick={this.handleShow}>
          +
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label className="input">Title:</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label className="input">Image:</label>
                <input type="text" name="image" />
              </div>
              <div>
                <label className="input">Rating:</label>
                <input type="text" name="rating" />
              </div>
              <div>
                <label className="input">Year:</label>
                <input type="text" name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShow}>Close</Button>
              <Button variant="outline-primary">Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;