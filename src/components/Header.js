import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Header.css';
import homeLogo from "../Assets/home-main.svg";
import Type from "./Type";
import HeaderButton from "./HeaderButton";
// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <section>
      <Container fluid className="first-page" id="home">
        <Container className="introduction">
          <Row>
          <Col md={7} className="intro-text">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                👋🏽
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ASH</strong><strong className ="header-color">TON</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={2} style={{ marginLeft: 50 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="cover"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <HeaderButton />
      </Container>
    </section>
  );
}

export default Header;
