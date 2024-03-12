import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MainSec.css";
import MainImg from "./../images/illustration-intro.png";
function MainSec() {
  return (
    <section className="secOne">
      <Container>
        <Row>
          <Col className="MainImg">
            <img
              className="img-fluid"
              src={MainImg}
              alt="MainImg"
              title="MainImg"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores all your most important files in one secure location.
              ‘Access them wherever you need, share and collaborate with friends
              family, and co-workers,
            </p>
            <button>Get Started</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainSec;
