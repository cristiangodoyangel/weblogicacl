// src/components/Hero.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';


function Hero() {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: '#1A2A44' }}>
      <Container>
                <h1 className="display-5 fw-bold text-white">Desarrollo Web, Software y Marketing Digital</h1>
        <p className="lead text-light mb-4">
        En Lógica desarrollamos soluciones de software a medida, apps móviles y sistemas web eficientes. Combinamos innovación, experiencia y tecnología para ayudarte a escalar tu negocio.
        </p>
        <Button variant="success" size="lg">Contáctanos</Button>
      </Container>
    </section>
  );
}

export default Hero;
