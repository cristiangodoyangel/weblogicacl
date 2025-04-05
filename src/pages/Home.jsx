import React from 'react';
import Hero from '../components/Hero';
import { Container } from 'react-bootstrap';
import logo from '../assets/logica.png';

// ✅ Logos de clientes
import cliente1 from '../assets/clientes/m360.png';
import cliente2 from '../assets/clientes/pmt.png';
import cliente3 from '../assets/clientes/drpc.png';
import cliente4 from '../assets/clientes/c360.png';

// ✅ Logos tecnológicos (usando import para evitar errores de Vite)
import reactLogo from '../assets/tech/react.svg';
import java from '../assets/tech/java.svg';
import spring from '../assets/tech/spring.svg';
import mysql from '../assets/tech/mysql.svg';
import docker from '../assets/tech/docker.svg';
import github from '../assets/tech/github.svg';

import proyecto1 from '../assets/webs/motors360.png';
import proyecto2 from '../assets/webs/pmt.png';

const techLogos = [
  { name: 'React', src: reactLogo },
  { name: 'Java', src: java },
  { name: 'Spring', src: spring },
  { name: 'MySQL', src: mysql },
  { name: 'Docker', src: docker },
  { name: 'GitHub', src: github },
];

function Home() {
  return (
    <>
      <Hero />

      {/* 🟢 Servicios */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Nuestros Servicios</h2>
          <div className="row justify-content-center text-center g-5">
            {[
              {
                icon: 'bi-code-slash',
                title: 'Desarrollo Web',
                text: 'Creamos sitios web modernos que representan tu marca con excelencia.',
              },
              {
                icon: 'bi-phone',
                title: 'Apps Móviles',
                text: 'Aplicaciones móviles intuitivas, nativas y multiplataforma.',
              },
              {
                icon: 'bi-gear-fill',
                title: 'Software a Medida',
                text: 'Soluciones únicas que responden a las necesidades de tu negocio.',
              },
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-no-card">
                  <i className={`bi ${service.icon}`}></i>
                  <h5>{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 🟢 ¿Por qué elegirnos? */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">¿Por qué elegir Lógica?</h2>
          <div className="row text-center g-5">
            {[
              {
                icon: 'laptop',
                title: 'Experiencia',
                text: 'Más de 3 años desarrollando soluciones con tecnologías modernas e IA para optimizar procesos empresariales.',
              },
              {
                icon: 'shield-check',
                title: 'Seguridad',
                text: 'Aplicamos buenas prácticas en ciberseguridad y desarrollo seguro. Protegemos tus datos en todo momento.',
              },
              {
                icon: 'arrows-fullscreen',
                title: 'Escalabilidad',
                text: 'Diseñamos soluciones modulares que crecen contigo, adaptándose a nuevos desafíos de tu empresa.',
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-no-card">
                  <i className={`bi bi-${item.icon}`}></i>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 🟢 Carrusel infinito de clientes */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Confían en Nosotros</h2>
          <div className="clientes-marquee-wrapper">
            <div className="clientes-marquee">
              {[cliente1, cliente2, cliente3, cliente4, cliente1, cliente2, cliente3, cliente4].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Cliente ${index + 1}`}
                  className="cliente-logo"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 🟢 Tecnologías y Formación Continua */}
      <section className="py-5 bg-white">
        <Container>
          <div className="row align-items-center">
            {/* 🟢 Texto explicativo */}
            <div className="col-md-6">
              <h2 className="mb-4 fw-bold">Tecnologías y Formación Continua</h2>
              <p className="text-muted mb-3">
                En <strong>Lógica</strong> trabajamos con tecnologías modernas como React, Java, Spring Boot, MySQL y Docker.
                Nos mantenemos en constante formación para entregar soluciones actualizadas, eficientes y seguras.
              </p>
              <p className="text-muted">
                Participamos regularmente en capacitaciones, cursos, bootcamps y certificaciones para mantenernos a la vanguardia del desarrollo tecnológico.
              </p>
            </div>

            {/* 🟢 Logos tecnológicos */}
            <div className="col-md-6">
              <div className="row text-center g-4">
                {techLogos.map((tech, index) => (
                  <div className="col-4" key={index}>
                    <img
                      src={tech.src}
                      alt={tech.name}
                      title={tech.name}
                      className="tech-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 🟢 CTA Contacto */}
      <section className="py-5 text-center" style={{ backgroundColor: '#1A2A44', color: 'white' }}>
        <Container>
          <img src={logo} alt="Logo Lógica" height="150" className="mb-4" />
          <h2 className="mb-3">¿Listo para dar el siguiente paso?</h2>
          <p className="mb-4">Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.</p>
          <a href="/contacto" className="btn btn-success btn-lg">
            Contáctanos Ahora
          </a>
        </Container>
      </section>

      {/* 🟢 Nuestros Proyectos */}
<section className="py-5 bg-light">
  <Container>
    <h2 className="text-center mb-5 text-logica-green">Nuestros Proyectos</h2>
    <div className="row text-center g-4">
      {[
        {
          name: 'Motors360',
          image: proyecto1,
          desc: 'Plataforma de reservas para talleres y servicios automotrices.',
          link: 'https://motors360.cl',
        },
        {
          name: 'PM&T Integra',
          image: proyecto2,
          desc: 'Sistema de gestión interna para planificación educativa.',
          link: 'https://pmtintegra.cl',
        },
      ].map((project, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="project-box p-3 bg-white shadow-sm h-100">
            <img
              src={project.image}
              alt={project.name}
              className="img-fluid mb-3"
              style={{ maxHeight: '150px', objectFit: 'contain' }}
            />
            <h5 className="fw-bold">{project.name}</h5>
            <p className="text-muted">{project.desc}</p>
            <a href={project.link} className="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>

    </>
  );
}

export default Home;
