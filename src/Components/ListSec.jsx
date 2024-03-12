import React from "react";
import "./ListSec.css";
import imgone from "./../images/icon-access-anywhere.svg";
import imgtwo from "./../images/icon-security .png";
import imgthree from "./../images/icon-collaboration.svg";
import imgfour from "./../images/icon-any-file.svg";

import { Col, Container, Row, Card } from "react-bootstrap";
function ListSec() {
  return (
    <section className="ListSec">
      <Container>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <img src={imgone} alt="fristimg" title="fristimg" />
                </Card.Title>
                <h5>Access your files, anywhere</h5>
                <Card.Text>
                  The ability to use a smartphone, tablet, or computer to access
                  your account means your files follow you everywhere,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <img src={imgtwo} alt="scnimg" title="scnimg" />
                </Card.Title>
                <h5>Security you can trust</h5>
                <Card.Text>
                  2-factor authentication and user-controlled encryption are
                  Just couple of the security features we allow to help secure
                  your files.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="scnrow">
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <img src={imgthree} alt="thirdimg" title="thirdimg" />
                </Card.Title>
                <h5>Real-time collaboration</h5>
                <Card.Text>
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email attachments
                  required
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <img src={imgfour} alt="fourimg" title="fourimg" />
                </Card.Title>
                <h5>Store any type of file</h5>
                <Card.Text>
                  Whether you're sharing holidays photos or work documents, Fylo
                  has you covered allowing for all file types to be securely
                  stored and shared.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ListSec;
