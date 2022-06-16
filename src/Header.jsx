import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

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
