import React from 'react';  
import { Container, Carousel } from 'react-bootstrap';  
import './Hobbies.css';  

function Hobbies() {  
  return (  
    <Container className="hobbies-page mt-5">  
      {/* Introduction Section */}  
      <section className="intro-section text-center py-5">  
        <h1>My Hobbies & Interests</h1>  
        <p className="lead">  
          Here are some activities that I’m passionate about and enjoy in my free time.  
        </p>  
      </section>  

      {/* Hobbies Carousel Section */}  
      <section className="hobbies-carousel-section py-5">  
        <Carousel className="hobby-carousel">  
          {/* Slide 1 */}  
          <Carousel.Item>  
            <img  
              className="d-block w-100 hobby-image"  
              src="https://i.postimg.cc/525bvVMg/1000017444-01.jpg"  
              alt="Photography"  
            />  
            <Carousel.Caption>  
              <h3>Photography and Exploring</h3>  
              <p>I love taking pictures in the greenery of nature and exploring new places. This helps me relieve stress and stay engaged.</p>  
            </Carousel.Caption>  
          </Carousel.Item>  

          {/* Slide 2 */}  
          <Carousel.Item>  
            <img  
              className="d-block w-100 hobby-image"  
              src="https://i.postimg.cc/W1H9HzrS/IMG20231225140711.jpg"  
              alt="Cats"  
            />  
            <Carousel.Caption>  
              <h3>Petting My Cats</h3>  
              <p>I have ten cats at home, and they are all part of my family. Whenever I get bored, I remember that I have cats to play with and pet.</p>  
            </Carousel.Caption>  
          </Carousel.Item>  

          {/* Slide 3 */}  
          <Carousel.Item>  
            <img  
              className="d-block w-100 hobby-image"  
              src="https://i.postimg.cc/T3zVbDn8/IMG20230429145811.jpg"  
              alt="Dancing"  
            />  
            <Carousel.Caption>  
              <h3>Dancing</h3>  
              <p>Since I was a child, I’ve loved to dance. Even now, I enjoy dancing with all my heart. It also helps me relieve stress.</p>  
            </Carousel.Caption>  
          </Carousel.Item>  

          {/* Slide 4 */}  
          <Carousel.Item>  
            <img  
              className="d-block w-100 hobby-image"  
              src="https://i.postimg.cc/tCfW0xS1/IMG20231015220551.jpg"  
              alt="Crocheting"  
            />  
            <Carousel.Caption>  
              <h3>Crocheting</h3>  
              <p>This is a new hobby I picked up last year. My older sister bought me some tools for crocheting. I love making hats for my cats and crocheting flowers.</p>  
            </Carousel.Caption>  
          </Carousel.Item>  
        </Carousel>  
      </section>  
    </Container>  
  );  
}  

export default Hobbies;
