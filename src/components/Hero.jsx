// src/components/Hero.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';


function Hero() {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: '#1A2A44' }}>
      <Container>
                <h1 className="display-5 fw-bold text-white">Impulsamos tu crecimiento digital</h1>
        <p className="lead text-light mb-4">
          Desarrollo web, software a medida y soluciones tecnológicas.
        </p>
        <Button variant="success" size="lg">Contáctanos</Button>
      </Container>
    </section>
  );
}

export default Hero;
