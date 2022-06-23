import React, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { Control, Errors, LocalForm } from "react-redux-form";
import { dishes } from "./Data";


//------------------------------------Comment Portion Starts--------------------------------------------
const required = (val) => val && val.length; //value > 0
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

const Detail = (props) => {
 

  function CommentModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (values) => {
      console.log("Current State is: " + JSON.stringify(values));
      alert("Current State is: " + JSON.stringify(values));
      handleClose();
    };

    return (
      <>
        <Button variant="btn btn-outline-secondary" onClick={handleShow}>
          Submit Comment
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
              {/* Rating */}
              <Row className="form-group">
                <Form.Label htmlFor="Rating" md={2}>
                  Rating
                </Form.Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    className="form-control"
                    name="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              {/* Name */}
              <Row className="form-group">
                <Form.Label htmlFor="Name" md={2}>
                  Your Name
                </Form.Label>
                <Col md={12}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater that 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  ></Errors>
                </Col>
              </Row>

              {/* Comment */}
              <Row className="form-group">
                <Form.Label htmlFor="message" md={2}>
                  Your Comment
                </Form.Label>
                <Col md={12}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="mt-2">
                Submit
              </Button>
            </LocalForm>
          </Modal.Body>
        </Modal>
      </>
    );

//------------------------------------Comment Portion Ends--------------------------------------------

  }

  return (
    <div
      className="detail row align-items-center"
      style={props.c ? { display: "block" } : { display: "none" }}
    >
      <div className="">
        {dishes.map((data) => {
          if (props.name === data.name)
            return (
              <>
                <div className="row">
                  <div className="col-md-5 col-12  ">
                    <Card>
                      <Card.Img variant="top" src={data.image} />
                      <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-5 col-12 ">
                    <Card>
                      <Card.Body>
                        <Card.Title>Comments</Card.Title>

                        {dishes.map((data, i) => {
                          return (
                            <>
                              <Card.Text>{data.comments[i].comment}</Card.Text>
                              <Card.Text>
                                ---{data.comments[i].author},
                                {data.comments[i].date}
                              </Card.Text>
                            </>
                          );
                        })}
                        <CommentModal />
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </>
            );
        })}
      </div>
    </div>
  );
};

export default Detail;
