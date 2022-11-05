import React from 'react';
import './Contact.css';

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
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
        </div>
    </div>
  )
}

export default Contact