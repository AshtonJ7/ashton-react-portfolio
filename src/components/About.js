import React from 'react';
import '../styles/About.css';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaHtml5, FaCss3, FaNode, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io"

// By importing the About.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object on the JSX tag

function About() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "5em" }}>
              About<span class ="header-color"> Me</span></h2>
              <p className="home-about-body">
              Birmingham based web developer who specializes in front-end development. I have a strong understanding of HTML, CSS, and JavaScript. I am also proficient in various frameworks and libraries such as React, Angular, and Vue. 
              My expertise in responsive web design ensures that all of my projects look great on any device.
                <br />
                <br />When I'm not coding, I enjoy engaing in design work and exploring the latest web development trends.

                <br />
                <br />
                Thank you for taking the time to view my portfolio. Feel free to have a look at a few of previous work below. 
                If you have any questions or would like to discuss a project, please don't hesitate to get in touch.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="skills">
          <h2 style={{ fontSize: "5em" }}>
              </h2>
            <ul className="home-about-skills-list">
              <li className="skills-icons ">
                <a
                  href="/"
                  className="icon-colour home-social-icons"> 
                <FaHtml5 size={"5em"} />
                </a>
                <p>HTML</p>
              </li>
              <li className="skills-icons">
                <a
                    href="/"
                    className="icon-colour home-social-icons"
                    >
                  
                  <FaCss3  size={"5em"} />
           
                  </a>
                  <p>CSS3</p>
              </li>
              <li className="skills-icons">
                <a
                    href="/"
                    className="icon-colour home-social-icons">
               <IoLogoJavascript size={"5em"} />
                </a>
                <p>Javascript</p>
              </li>
              <li className="skills-icons">
                <a
                className="icon-colour home-social-icons"
                   href="/">
                  <FaNode size={"5em"} />
                </a>
                <p>Node</p>
              </li>
              <li className="skills-icons">
                <a
                    href="/"
                    className="icon-colour home-social-icons">
                  <FaDatabase size={"5em"} />
                </a>
                <p>Database</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
