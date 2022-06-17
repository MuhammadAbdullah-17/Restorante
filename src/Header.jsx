import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function ModalFunction() {
  const [show, setShow] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [data, setData] = useState({
    name: "",
    pass: "",
  });
  useEffect(() => {
    console.log("logged In");
  }, [loggedIn]);
  const handleClose = () => {
    setloggedIn(true)
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const Clicked=()=>
  {
    return(
      <>
      <p className="me-5 text-white fs-6 pt-3">Hey {data.name}!</p>
        <Button style={{ backgroundColor: "#6213b0" }} onClick={()=>{setloggedIn(false)}}>
          LogOut
        </Button>
      </>
    )
  }

  return (
    <>
      {loggedIn ? (
        <Clicked/>
       
      ) : (
        <Button style={{ backgroundColor: "#6213b0" }} onClick={handleShow}>
          Login
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="LoginForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={data.name}
                name="name"
                onChange={onChangeHandler}
                placeholder="Username"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="LoginForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={data.pass}
                name="pass"
                onChange={onChangeHandler}
                placeholder="Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar className="con1" variant="dark">
          <Container>
            <Navbar.Brand href="">
              <img
                src="assets/logo.png"
                height="50px"
                width="70px"
                alt="Logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto ms-5">
              <Link className="nv" to="/">
                <i class="fa fa-solid fa-envelope-open"></i>

                <span className="ms-1">Home</span>
              </Link>
              <Link className="nv" to="/About">
                <i class="fa fa-solid fa-info"></i>
                <span className="ms-1">About</span>
              </Link>
              <Link className="nv" to="/Menu">
                <i class="fa fa-solid fa-list"></i>
                <span className="ms-1">Menu</span>
              </Link>
              <Link className="nv" to="/Contact">
                <i class="fa fa-solid fa-address-card"></i>
                <span className="ms-1">Contact</span>
              </Link>
            </Nav>
          </Container>
          <div>
            <ModalFunction />
          </div>
        </Navbar>
      </div>
      <div className="row jmBox">
        <div className="p-5 ms-5 mb-4 col-6 text-white">
          <h1 className="ms-5">Ristorante Con Fusion</h1>
          <p className="lead ms-5">
            We take inspiration from the world's best cuisines, and create a
            unique fusion experience . Our lipsmacking creations will tickle
            your culinary senses!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
