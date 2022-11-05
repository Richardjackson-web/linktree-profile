import React from 'react';
import './Contact.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Footer from '../../Component/Footer/Footer';

function Contact() {
  return (
    <div>
        <div>
            <h1>Contact Me</h1>
            <p>
                Hi there, contact me to ask me about anything you have in mind.
            </p>
        </div>
        <div>
            <Form>
            <Row>
        <Col>
            <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Label>Last name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
        </Row>
        <Row>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        </Row>
        <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Send me a message and I'll reply you as soon as possible..." />
            </Form.Group>
        </Row>
        <Row>
        {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="You agree to providing your data to {name} who may contact you."
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
        </div>
      ))}
        </Row>
    </Form>
        </div>
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact