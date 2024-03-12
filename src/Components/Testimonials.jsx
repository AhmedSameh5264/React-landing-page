import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import p1 from "./../images/profile-1.jpg";
import p2 from "./../images/profile-2.jpg";
import p3 from "./../images/profile-3.jpg";

function Testimonials() {
  return (
    <section className="tesSec">
      <Container>
        <Row className="fristescol">
          <Col md={12} lg={4} className="tesCol">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="tesDeti">
              <img src={p1} alt="profile one" title="profile one" />
              <div className="personaldiv">
                <h2>Satish Patel</h2>
                <p> Founder @ CEO, Huddle</p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} className="tesCol">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="tesDeti">
              <img src={p2} alt="profile one" title="profile one" />
              <div className="personaldiv">
                <h2>Satish Patel</h2>
                <p> Founder @ CEO, Huddle</p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} className="tesCol">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="tesDeti">
              <img src={p3} alt="profile one" title="profile one" />
              <div className="personaldiv">
                <h2>Satish Patel</h2>
                <p> Founder @ CEO, Huddle</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
