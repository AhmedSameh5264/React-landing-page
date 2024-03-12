import React from "react";
import "./HowItWork.css";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import img from "./../images/illustration-stay-productive.png";

function HowItWork() {
  return (
    <section className="htwSec">
      <Container>
        <Row>
          <Col lg={6}>
            <img
              className="img-fluid"
              src={img}
              alt="Mainimg"
              title="Mainimg"
            />
          </Col>
          <BrowserRouter>
            <Col lg={6} className="htw2col">
              <h2>Stay productive, wherever you are</h2>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration, No email attachments
                required.
              </p>
              <Link className="howfywork" to="/">
                See how Fylo works <FontAwesomeIcon icon={faCircleRight} />
              </Link>
            </Col>
          </BrowserRouter>
        </Row>
      </Container>
    </section>
  );
}

export default HowItWork;
