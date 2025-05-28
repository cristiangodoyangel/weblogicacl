// src/components/Hero.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import banner from '../assets/banner.jpg';


function Hero() {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: '#1A2A44' }}>
      <Container>
                <h1 className="display-5 fw-bold text-white">Desarrollo Web, Software y Hosting</h1>
        <p className="lead text-light mb-4">
        En Lógica desarrollamos soluciones de software a medida, apps móviles y sistemas web eficientes. Combinamos innovación, experiencia y tecnología para ayudarte a escalar tu negocio.
        </p>
        {/* Banner debajo del texto de presentación */}
        <div className="my-3">
          <img src={banner} alt="Banner Lógica" style={{maxWidth: '1350px', border: '1px solid #ccc', width: '100%', height: 'auto', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}} className="img-fluid d-block mx-auto" loading="lazy" />
        </div>
       
      </Container>
    </section>
  );
}

export default Hero;
