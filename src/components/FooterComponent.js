import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" style={{ color: "#0f0f0f" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" style={{ color: "#0f0f0f" }}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/products" style={{ color: "#0f0f0f" }}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/advisory" style={{ color: "#0f0f0f" }}>
                  Advisory
                </Link>
              </li>
              <li>
                <Link to="/aboutus" style={{ color: "#0f0f0f" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" style={{ color: "#0f0f0f" }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/register" style={{ color: "#0f0f0f" }}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              23, Kofo Abayomi Street
              <br />
              Victoria Island, Lagos
              <br />
              NIGERIA
              <br />
              <i className="fa fa-phone"></i>: +234 1 280 4000
              <br />
              <i className="fa fa-fax"></i>: +234 1 280 4000
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:info@novambl.com" style={{ color: "#0f0f0f" }}>
                {" "}
                info@novambl.com
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/novabankng/"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/company/nova-merchant-bank-ltd/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/novabankng/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.instagram.com/novabankng/"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/channel/UCjqUcY-ajVMaqa4jRfAIIIA"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                className="btn btn-social-icon"
                href="mailto:info@novambl.com:"
              >
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Designed by Frezeh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
