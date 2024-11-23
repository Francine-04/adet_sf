import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container className="about-page mt-5">
      {/* Introduction Section */}
      <section className="intro-section text-center py-5">
        <img
          src="https://i.postimg.cc/7YWmVGqY/De-La-Torre-Francine-2.png" // Replace with your image URL
          alt="Francine M. De La Torre"
          className="rounded-circle mb-4 profile-image"
        />
        <h1>Hello! I'm Francine M. De La Torre</h1>
        <p className="lead">
          Passionate about pursuing my dream to have a better future and always eager to learn new things.
          Welcome to my journey!
        </p>
      </section>

      {/* Carousel Presentation Section */}
      <section className="presentation-carousel py-5">
        <h2 className="text-center mb-4">Who Am I?</h2>
        <Carousel interval={5000}>
          {/* Slide 1: Introduction */}
          <Carousel.Item>
            <Card className="matcha-card">
              <Card.Body>
                <Row className="d-flex flex-column flex-md-row">
                  <Col md={6} className="mb-3 mb-md-0">
                    <img
                      src="https://i.postimg.cc/FRWFxJsx/IMG20220521105909.jpg"
                      alt="Francine's Introduction"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Title>Introduction</Card.Title>
                    <Card.Text>
                      I'm Francine, a passionate student pursuing a Bachelor of Science in Computer Science with a
                      deep interest in the tech industry. My journey is centered around learning and growing, and I
                      strive to bring positive changes in everything I do, staying active and engaged with events and
                      experiences. As a simple person, my goal is to lead a happy life in a positive environment while
                      pursuing my dreams and ambitions.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Slide 2: My Passion */}
          <Carousel.Item>
            <Card className="matcha-card">
              <Card.Body>
                <Row className="d-flex flex-column flex-md-row">
                  <Col md={6} className="mb-3 mb-md-0">
                    <img
                      src="https://i.postimg.cc/MHz9DvHd/received-690163675813299.jpg"
                      alt="Francine's Passion"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Title>My Passion</Card.Title>
                    <Card.Text>
                      I am passionate about personal growth and exploration. Whether it’s pursuing new knowledge
                      through my studies or engaging in creative activities, I believe in constantly pushing my
                      boundaries. My aim is to achieve my dreams and contribute to my family’s happiness, giving my
                      parents the life they desire. As I navigate this journey of learning and maturing, I hold onto my
                      life quote: "Happy family, happy me."
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Slide 3: My Favorite Food and Drink */}
          <Carousel.Item>
            <Card className="matcha-card">
              <Card.Body>
                <Row className="d-flex flex-column flex-md-row">
                  <Col md={6} className="mb-3 mb-md-0">
                    <img
                      src="https://i.postimg.cc/kDryBG8n/Old-Roll-1695112979586.jpg"
                      alt="Francine's Favorite Food and Drink"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Title>My Favorite Food and Drink</Card.Title>
                    <Card.Text>
                      During tough times, I find comfort in my favorite food: fries and a matcha drink. The warm, crispy
                      fries bring me joy and remind me of life’s simple pleasures, while the soothing flavor of matcha
                      helps me relax and recharge. This combination allows me to pause, reflect, and regain my strength
                      to tackle life’s challenges.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Slide 4: Future Aspirations */}
          <Carousel.Item>
            <Card className="matcha-card">
              <Card.Body>
                <Row className="d-flex flex-column flex-md-row">
                  <Col md={6} className="mb-3 mb-md-0">
                    <img
                      src="https://i.postimg.cc/25HM3d5r/20201119-174033.jpg"
                      alt="Francine's Future Aspirations"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Title>Future Aspirations</Card.Title>
                    <Card.Text>
                      After I finish my studies, I hope to become successful and truly happy in life while achieving my
                      dreams. I aim to make a meaningful impact in the tech industry, and I am excited about the
                      opportunities that lie ahead.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </section>
    </Container>
  );
}

export default About;
