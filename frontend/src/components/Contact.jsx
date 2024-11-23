import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <Container className="contact-page mt-5">
      {/* Contact Section */}
      <section className="contact-section py-5 text-center">
        <h1 className="contact-heading">Contact Me</h1>
        <p className="lead contact-description">
          Feel free to reach out through any of these platforms. I’d be happy to connect with you!
        </p>
      </section>

      {/* Social Media Buttons Section */}
      <section className="social-links py-4 text-center">
        <h2>Connect with me on social media</h2>
        <Row className="mt-4">
          {/* Instagram */}
          <Col md={4}>
            <Button
              variant="outline-success"
              href="https://www.instagram.com/pwansineee/"
              target="_blank"
              className="social-button"
            >
              <img
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Black-Logo.wine.svg" 
                alt="Instagram"
                className="social-logo"
              />
              Instagram
            </Button>
          </Col>
          
          {/* Facebook */}
          <Col md={4}>
            <Button
              variant="outline-success"
              href="https://www.facebook.com/franchen01"
              target="_blank"
              className="social-button"
            >
              <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Black-Logo.wine.svg" 
                alt="Facebook"
                className="social-logo"
              />
              Facebook
            </Button>
          </Col>
          
          {/* Twitter */}
          <Col md={4}>
            <Button
              variant="outline-success"
              href="https://x.com/pwanpwans"
              target="_blank"
              className="social-button"
            >
              <img
                src="https://about.x.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png" 
                alt="Twitter"
                className="social-logo"
              />
              Twitter
            </Button>
          </Col>
        </Row>

        <Row className="mt-3">
          {/* Telegram */}
          <Col md={4}>
            <Button
              variant="outline-success"
              href="https://telegram.org/dl"
              target="_blank"
              className="social-button"
            >
              <img
                src="https://www.logo.wine/a/logo/Telegram_(software)/Telegram_(software)-X-Black-Logo.wine.svg" 
                alt="Telegram"
                className="social-logo"
              />
              Telegram
            </Button>
          </Col>
          
          {/* Email */}
          <Col md={4}>
            <Button
              variant="outline-success"
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              target="_blank"
              className="social-button"
            >
              <img
                src="https://pngimg.com/uploads/gmail_logo/gmail_logo_PNG12.png" 
                alt="Email"
                className="social-logo"
              />
              Email
            </Button>
          </Col>

          {/* Discord */}
          <Col md={4}>
            <Button
              variant="outline-success"
              href="https://discord.com/channels/@me"
              target="_blank"
              className="social-button"
            >
              <img
                src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo-Black-Logo.wine.svg" 
                className="social-logo"
              />
              Discord
            </Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Contact;
