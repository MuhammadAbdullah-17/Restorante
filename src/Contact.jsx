import React, { useState } from "react";
import { Breadcrumb, Form, Button, Col, Row } from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    phone: "",
    choice: "",
    message: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert("Your feedback is received. Thank you So much!!!");
    setData({
      email: "",
      username: "",
      phone: "",
      choice: "",
      message: ""
    });
  };

  const updateField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="row ms-5">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="row row-content ms-5">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info" href="/">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>

      <div className="row fw-bold col-12 mt-5 text-center">
        <h2>Send us your feedback!</h2>
      </div>
      <div className="row mt-5 ms-5">
        <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="Name">
            <Row>
              <Col md={2}>
                <Form.Label>Your Name</Form.Label>
              </Col>

              <Col md={5}>
                <Form.Control
                  type="text"
                  value={data.username}
                  name="username"
                  onChange={updateField}
                  placeholder="Enter Name"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Row>
              <Col md={2}>
                <Form.Label>Email address</Form.Label>
              </Col>

              <Col md={5}>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={data.email}
                  name="email"
                  onChange={updateField}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Telephone">
            <Row>
              <Col md={2}>
                <Form.Label>Phone Number</Form.Label>
              </Col>

              <Col md={5}>
                <Form.Control
                  className="col-10"
                  type="tel"
                  value={data.phone}
                  name="phone"
                  onChange={updateField}
                  placeholder="Enter Phone Number"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactType">
            <Row>
              <Col md={2}>
                <Form.Label>Method to Contact you</Form.Label>
              </Col>
              <Col md={4}>
                <input
                  type="radio"
                  value={data.choice}
                  name="choice"
                  onChange={updateField}
                />
                <label for="email">Email</label>
                <input
                  type="radio"
                  className="ms-2"
                  value={data.choice}
                  name="choice"
                  onChange={updateField}
                />
                <label for="phone">Phone</label>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Row>
              <Col md={2}>
                <Form.Label>Enter your Message</Form.Label>
              </Col>

              <Col md={5}>
                <Form.Control
                  type="text"
                  value={data.message}
                  name="message"
                  onChange={updateField}
                  rows="12"
                />
              </Col>
            </Row>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Contact;
