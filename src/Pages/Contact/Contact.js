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
        <Row>
        <Col className="row"   md={10}>
        <div>
            <h1 className="contact">Contact Me</h1>
            <p className="hi-con">
                Hi there, contact me to ask me about anything you have in mind.
            </p>
        </div>
        </Col>
        </Row>
        <div>
            <Form>
            <Row>
        <Col className="row" md={4}>
            <Form.Label className="first">First name</Form.Label>
          <Form.Control id="first_name" placeholder="First name" />
        </Col>
        <Col className="row" md={4}>
        <Form.Label className="last">Last name</Form.Label>
          <Form.Control id="last_name" placeholder="Last name" />
        </Col>
        </Row>
        <Row>
          <Col className="row" md={10}>
          <Form.Label className="email">Email address</Form.Label>
        <Form.Control id="email" type="email" placeholder="name@example.com" />
          </Col>
        </Row>
        <Row>
            <Col className="row" md={10}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="message">Message</Form.Label>
            <Form.Control id="message" as="textarea" rows={3} placeholder="Send me a message and I'll reply you as soon as possible..." />
            </Form.Group>
            </Col>
        </Row>
        <Row>
        
        </Row>
          <Row>
            
              <Col className="row" md="10">
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
              <div className="d-grid gap-2">
              <Button id="btn_submit" variant="primary" size="lg">
                  Block level button
              </Button>
              </div>
              </Col>
          </Row>
    </Form>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact