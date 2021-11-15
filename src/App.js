import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" />
            <Form.Text className="text-muted">
              Your name will only stay with us.
    </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="me@email.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.lifewire.com/thmb/-MWE5VJWnlMWf3wrvBmE34AcRt4=/3863x2578/filters:fill(auto,1)/the-bund-of-shanghai-reflected-in-a-magnifying-glass-657283468-5a2f09be98020700374eaa1b.jpg" />
          <Card.Body>
            <Card.Title>Explore New York</Card.Title>
            <Card.Text>
              Click here to begin your adventure in New York.
            </Card.Text>
            <Button variant="primary">Explore</Button>
          </Card.Body>
        </Card>
      </div>

    );
  }
}

export default App;
