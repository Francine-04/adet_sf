import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Education.css';

function Education() {
  return (
    <Container className="mt-5">
      {/* Education Section */}
      <section className="education-section py-5">
        <h2 className="text-center mb-4">My Education Journey</h2>

        <Row className="mb-4">
          {/* High School */}
          <Col md={12} lg={4}>
            <Card className="education-card landscape-card">
              <Card.Body className="d-flex">
                {/* left */}
                <Image
                  src="https://i.postimg.cc/7Zb7Kmmp/Remini20220119173528963.jpg/150" // Replace with high school image
                  alt="High School"
                  className="img-fluid school-image"
                />
                {/* right */}
                <div className="ml-4">
                  <Card.Title>High School</Card.Title>
                  <Card.Text>
                    I graduated from Universidad de Sta. Isabel, where I gained a solid foundation in learning about the things I was curious about and building lasting friendships. During my high school years, I gained a lot of knowledge, especially in science.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Senior High School */}
          <Col md={12} lg={4}>
            <Card className="education-card landscape-card">
              <Card.Body className="d-flex">
                {/*left */}
                <Image
                  src="https://i.postimg.cc/5N5YpDB7/350216774-235874819076951-8718705989382952105-n.png/150" // Replace with senior high school image
                  alt="Senior High School"
                  className="img-fluid school-image"
                />
                {/* Text content on the right */}
                <div className="ml-4">
                  <Card.Title>Senior High School</Card.Title>
                  <Card.Text>
                    I completed my senior high school education at Universidad de Sta. Isabel, where I focused on the Science, Technology, Engineering, and Mathematics (STEM) strand, which aligns with my goal to pursue a career in this field in college.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* College Undergraduate */}
          <Col md={12} lg={4}>
            <Card className="education-card landscape-card">
              <Card.Body className="d-flex">
                {/*left */}
                <Image
                  src="https://i.postimg.cc/WzTj4Ydz/445958573-7867039666687943-2399889261878286701-n.jpg/150" // Replace with college image
                  alt="College"
                  className="img-fluid school-image"
                />
                {/* right */}
                <div className="ml-4">
                  <Card.Title>College Undergraduate</Card.Title>
                  <Card.Text>
                    I am currently pursuing my undergraduate studies in Computer Science at Naga College Foundation, Inc. My focus is on building my future as a programmer, while shaping my knowledge and preparing for a career in the tech industry.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Education;
