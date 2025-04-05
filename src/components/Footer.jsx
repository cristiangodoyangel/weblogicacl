

import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/logica.png';



function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1A2A44' , color: '#ccc', padding: '3rem 0' }}>
      <Container>
        <div className="row align-items-center text-center text-md-start">
          {/* 🟢 Logo y nombre */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={logo} alt="Logo Lógica" height="50" className="mb-2" />
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Impulsamos tu crecimiento digital.
            </p>
          </div>

          {/* 🟢 Navegación */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="text-uppercase text-white mb-3">Navegación</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Inicio</a></li>
              <li><a href="/#servicios" className="footer-link">Servicios</a></li>
              <li><a href="/#nosotros" className="footer-link">Nosotros</a></li>
              <li><a href="/contacto" className="footer-link">Contacto</a></li>
            </ul>
          </div>

          {/* 🟢 Contacto */}
          <div className="col-md-4">
            <h6 className="text-uppercase text-white mb-3">Contacto</h6>
            <p className="mb-1">Antofagasta, Chile</p>
            <p className="mb-1">+56 9 1234 5678</p>
            <p className="mb-0">contacto@weblogica.cl</p>
          </div>
        </div>

        <hr style={{ borderTop: '1px solid #444', margin: '2rem 0' }} />

        <p className="text-center" style={{ fontSize: '0.9rem', marginBottom: 0 }}>
          © {year} Lógica. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

