import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; 

function Home() {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <section className="text-center py-5 bg-light rounded shadow hero-section">
        <div className="hero-image">
          <img
            src="https://i.postimg.cc/0jWRZkNR/Matcha-Milk-And-Mocha-Bear-GIF-Matcha-Milk-And-Mocha-Bear-Milk-Mocha-Discover-Share-GIFs.gif/400x300" // Replace with your image URL
            alt="Hero"
            className="img-fluid rounded"
          />
        </div>
        <h1>Welcome to My Profile Website</h1>
        <p className="lead">
          Explore my personal information and get to know me better!
        </p>
        <Button variant="btn-custom-green" href="/About">
          Learn More About Me
        </Button>
      </section>

      {/* Highlights Section */}
      <section className="mt-5">
        <h2 className="text-center">Explore My Website</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="h-100 shadow card-section">
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  Learn more about my background, goals, and aspirations.
                </Card.Text>
                <Button className="btn-visit" href="/About">
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow card-section">
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                  Discover my academic journey.
                </Card.Text>
                <Button className="btn-visit" href="/Education">
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow card-section">
              <Card.Body>
                <Card.Title>Hobbies</Card.Title>
                <Card.Text>
                  Learn about my passions and how I spend my free time.
                </Card.Text>
                <Button className="btn-visit" href="/Hobbies">
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Footer */}
      <footer className="mt-5 text-center py-3 border-top footer-section">
        <p>&copy; 2024 My Profile Website. All Rights Reserved.</p>
        <p>
          <a href="/Contact" className="text-primary">Contact Me</a>
        </p>
      </footer>
    </Container>
  );
}

export default Home;
