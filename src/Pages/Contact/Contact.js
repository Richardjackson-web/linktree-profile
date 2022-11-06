import React, {useState} from 'react';
import './Contact.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Footer from '../../Component/Footer/Footer';

function Contact() {
  const [validated, setValidated] = useState(false);
  const sendMessage = (event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // alert("Thank you for submitting...you will hear from me soon.")
  };
  return (
    <div>
        <Row className="first-row">
        <Col className="row"   md={10}>
        <div>
            <h1 className="contact">Contact Me</h1>
            <p className="hi-con">
                Hi there, contact me to ask me about anything you have in mind.
            </p>
        </div>
        </Col>
        </Row>
        <div className="form-div">
            <Form noValidate validated={validated} onSubmit={sendMessage}>
            <Row>
        <Col className="row" md={4}>
            <Form.Label className="first">First name</Form.Label>
          <Form.Control id="first_name" placeholder="Enter your first name" required/>
        </Col>
        <Col className="row" md={4}>
        <Form.Label className="last">Last name</Form.Label>
          <Form.Control id="last_name" placeholder="Enter your last name" required/>
        </Col>
        </Row>
        <Row>
          <Col className="row" md={10}>
          <Form.Label className="email">Email</Form.Label>
        <Form.Control id="email" type="email" placeholder="yourname@email.com" required/>
          </Col>
        </Row>
        <Row>
            <Col className="row" md={10}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="message">Message</Form.Label>
            <Form.Control id="message" as="textarea" rows={5} placeholder="Send me a message and I'll reply you as soon as possible..." required/>
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
            label="You agree to providing your data to Richard who may contact you."
            name="group1"
            type={type}
            required
            className="check"
            id={`inline-${type}-1`}
          />
        </div>
      ))}
              <div className="d-grid gap-2">
              <Button type="submit" className="but" id="btn_submit" variant="primary" size="lg">
              Send message
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