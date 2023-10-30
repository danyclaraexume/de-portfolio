import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile';
import Skills from './Components/Skills'
import Project from './Components/Project';
import Education from './Components/Education';
import Work from './Components/Work';
import ProfileData from './Data/Profile.json'

import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap';

function App() {
  const fullname = ProfileData.personal.firstName + " " + ProfileData.personal.lastName
  return (
    <Container className="App" fluid>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
        <Container fluid="md">
          <Navbar.Brand href="#home"><h2>{fullname}</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a href="#home" className='navLink'>About Me</a>
              <a href="#skills" className='navLink'>Skills</a>
              <a href="#projects" className='navLink'>Projects</a>
              <a href="#schools" className='navLink'>Education</a>
              <a href="#works" className='navLink'>Experience</a>
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>
      <Container fluid='md' className='mainContent'>
        <Row>
          <Col className='mainContent'>
            <Profile profileData={ProfileData} id='home' />
            <Skills />
            <Work />
            <Project />
            <Education />
          </Col>
        </Row>
        <Row>        
          <p className='hobbies'> Dany Exumé - 2023</p>
        </Row>
      </Container>      
    </Container>
  );
}

export default App;
