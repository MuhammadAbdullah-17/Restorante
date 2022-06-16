import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import './App.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-4 mt-5 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/Main">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Main">Menu</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 mt-5 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg me-3"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg me-3"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg me-3"></i>
              <Link to="mailto:confusion@food.net">confusion@food.net</Link>
            </address>
          </div>
          <div className="col-12 mt-5 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus fs-3"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook fs-3"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin fs-3"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter fs-3"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube fs-3"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
