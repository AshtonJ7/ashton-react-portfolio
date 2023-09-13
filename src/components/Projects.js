import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import '../styles/Projects.css';
import chapterChatter from '../Assets/chapter-chatter.png';
import speak from '../Assets/speak-my-words.png';
import note from '../Assets/note-taker.png';
import jate from '../Assets/JATE.png';
import msa from '../Assets/MSA.png';
import tech from '../Assets/tech-corner.png';





function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
       <h2 style={{ fontSize: "5em" }}>
              <strong>Pro</strong><span class ="header-color">Jects</span></h2>
        <p>
        Feel free to browse through my most recent work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={chapterChatter}
              title="Chapter Chatter"
              description="
              Chapter Chatter is a full stack web app that allows young peole people to create an account and search its database of books. Users are able to search through different genres, 
              look up what's currently popular, see new book releases and daily recommendations. The app also allows users to create a reading list of what they are currently reading and submit a review of the book. 
              Made using Node, Express & MySQL database with Handlebars.js as the template engine."
              ghLink="https://github.com/33hollie33/chapterchatter"
              demoLink="https://chapterchatter2-52d5bc95ce85.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={speak}
              title="Speak My Words"
              description="SpeakMyWords is a web application that allows users to search for word definitions and have the results spoken out loud. The application will use an API to fetch the word definitions and a Text-to-Speech (TTS) API to convert the definitions to audio.
              The application's user interface was built using HTML, CSS and plain Javascript"
              ghLink="https://github.com/elleinadseer/speak-my-words"
              demoLink="https://elleinadseer.github.io/speak-my-words/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={tech}
              isBlog={false}
              title="Tech Corner"
              description="CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 
              This app was built following the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
              ghLink="https://github.com/AshtonJ7/Tech-Corner"
              demoLink="https://makenotes-03c8c8e35784.herokuapp.com/"   
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={jate}
              isBlog={false}
              title="Text Editor"
              description="This is a text editor that runs in the browser. It's able to be downloaded onto your pc and works offiline. 
                Users are able to create notes or code snippets with or without an internet connection. Previous notes are saves automatically and are able to be retrieved. 
              This app is a single-page application that meets the criteria for a progressive web application. Made with Javascript, Node.js & express. Data was stored using IndexedDB database."
              ghLink="https://github.com/AshtonJ7/text-editor/tree/main"
              demoLink="https://peaceful-stream-63675-161d7f225d28.herokuapp.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={msa}
              isBlog={false}
              title="Marketing Soluting Agency"
              description="Simple website created for a marketing Agency business, It has a bespoke respnsive design and was created created using HTML, tailwindcss, postcss & webpack-cli. "
              ghLink="/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Taker"
              description="This is an application that can be used to write and save notes. Users are able to delete previous notes, as well as add new notes.  
              This application was made using Javascript, NODE.js, Express.js HTML & CSS"
              ghLink="https://github.com/AshtonJ7/makenotes"
              demoLink="https://makenotes-03c8c8e35784.herokuapp.com/"              
            />
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default Projects;