import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Custom Matcha Gradient Navbar */}
      <Navbar expand="lg" className="matcha-navbar">
        <Container>
          {/* Brand without gradient */}
          <Navbar.Brand className="navbar-brand">
            Persona Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/Home" className="nav-link gradient-text">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/About" className="nav-link gradient-text">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Education" className="nav-link gradient-text">
                Education
              </Nav.Link>
              <Nav.Link as={Link} to="/Hobbies" className="nav-link gradient-text">
                Hobbies
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="nav-link gradient-text">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
