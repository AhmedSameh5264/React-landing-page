import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../images/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col className="hdr">
            <div className="logo">
              <img src={logo} alt="logo" title="logo" />
            </div>
            <BrowserRouter>
              <nav>
                <ul>
                  <li>
                    <Link className="inpags">Features</Link>
                  </li>
                  <li>
                    <Link className="inpags">Team</Link>
                  </li>
                  <li>
                    <Link className="inpags">Sign in</Link>
                  </li>
                </ul>
              </nav>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
