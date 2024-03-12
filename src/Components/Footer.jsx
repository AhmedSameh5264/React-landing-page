import React, { useState } from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const [wrong, Setwrong] = useState("");
  const [email, SetEmail] = useState("");
  const handelemail = () => {
    if (email.indexOf("@") === -1) {
      Setwrong("Please enter a valid email address");
    } else {
      Setwrong("");
    }
  };
  return (
    <footer>
      <Container className="mainfooter">
        <Row className="">
          <Col md={12} lg={4} xl={4}>
            <img className="fotterlogo" src={logo} alt="logo" title="logo" />
            <div className="fotlogodiv">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </Col>
          <Col className="socialcol" md={12} lg={3} xl={2}>
            <div className="socialdiv">
              <h6>
                <FontAwesomeIcon icon={faPhoneVolume} /> +1-543-123-4561
              </h6>
              <h6>
                <FontAwesomeIcon icon={faEnvelope} />
                example@fylo.com
              </h6>
            </div>
          </Col>
          <Col className="ulfcol" md={12} lg={4} xl={4}>
            <div className="flist">
              <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
                <li className="forthfli">Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </Col>
          <Col className="mediacol" md={12} lg={1} xl={2}>
            <div className="media">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="uperFooter">
        <Row>
          <Col>
            <h2>Get early access today</h2>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you
            </p>
              <input
                onChange={(e) => SetEmail(e.target.value)}
                type="email"
              />
              <button onClick={handelemail}>Get Started For Free</button>
              <span>{wrong}</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
