import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import { Container } from 'react-bootstrap';
import logo from '../assets/logica.png';
import banner from '../assets/banner.png';
import bannerPorQueElegir from '../assets/bannerPorQueElegir.png';
import servicios from '../assets/servicios.png';

// Clientes
import cliente1 from '../assets/clientes/m360.png';
import cliente2 from '../assets/clientes/pmt.png';
import cliente3 from '../assets/clientes/drpc.png';
import cliente4 from '../assets/clientes/c360.png';

// Tecnologías
import reactLogo from '../assets/tech/react.svg';
import java from '../assets/tech/java.svg';
import spring from '../assets/tech/spring.svg';
import mysql from '../assets/tech/mysql.svg';
import docker from '../assets/tech/docker.svg';
import github from '../assets/tech/github.svg';

// Proyectos
import proyecto1 from '../assets/webs/cotizador.png';
import proyecto2 from '../assets/webs/drpc.png';
import proyecto3 from '../assets/webs/i360.png';

const techLogos = [
  { name: 'React', src: reactLogo },
  { name: 'Java', src: java },
  { name: 'Spring Boot', src: spring },
  { name: 'MySQL', src: mysql },
  { name: 'Docker', src: docker },
  { name: 'GitHub', src: github },
];

function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio | Lógica - Desarrollo Web y Software en Chile</title>
        <meta
          name="description"
          content="Lógica desarrolla sitios web, aplicaciones móviles y software a medida en Chile. Soluciones modernas, seguras y escalables para empresas e instituciones."
        />
        <link rel="canonical" href="https://weblogica.cl/" />
        <meta property="og:title" content="Lógica | Desarrollo Web y Software en Chile" />
        <meta property="og:description" content="Desarrollamos software, sitios web y apps móviles modernas con React, Java, Spring Boot y más." />
        <meta property="og:image" content="https://weblogica.cl/logica.png" />
        <meta property="og:url" content="https://weblogica.cl/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      </Helmet>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lógica",
          "url": "https://weblogica.cl",
          "logo": "https://weblogica.cl/logica.png",
          "description": "Empresa chilena de desarrollo web, software, apps móviles y soluciones digitales en la nube.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Antofagasta",
            "addressCountry": "CL"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+56 9 1234 5678",
            "contactType": "customer support",
            "availableLanguage": ["Spanish"]
          }
        })}
      </script>

      <Hero />
{/* Servicios */}
<section className="services-section py-5" style={{ backgroundColor: '#f8f9fa' }} aria-label="Servicios profesionales de desarrollo">
  <Container>
    <h2 className="text-center mb-5 text-logica-green">Nuestros Servicios</h2>
    <div className="row justify-content-center text-center g-5">
      {[
        { icon: 'bi-gear-fill', title: 'Software a Medida', text: 'Soluciones únicas que responden a las necesidades de tu negocio.' },
        { icon: 'bi-phone', title: 'Apps Móviles', text: 'Aplicaciones móviles intuitivas, nativas y multiplataforma.' },
        { icon: 'bi-code-slash', title: 'Desarrollo Web', text: 'Creamos sitios web modernos que representan tu marca con excelencia.' },
        { icon: 'bi-hdd-network', title: 'Hosting', text: 'Alojamiento web seguro, rápido y escalable para tus proyectos digitales.' },
      ].map((item, index) => (
        <div className="col-md-3" key={index}>
          <div className="service-no-card">
            <i className={`bi ${item.icon}`}></i>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>


   {/* Párrafo descriptivo con imagen al lado */}
    <div className="row align-items-center servicios-descripcion-row mt-5" style={{gap: 0}}>
      <div className="col-lg-6 d-flex align-items-center" style={{height: '100%'}}>
        <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: 0 }}>
          En <strong>Lógica</strong>, ofrecemos un abanico completo de servicios digitales diseñados para impulsar el crecimiento y la transformación tecnológica de tu empresa. Desarrollamos <strong>software a medida</strong> que automatiza procesos, reduce costos y se adapta exactamente a tus necesidades operativas. Creamos <strong>aplicaciones móviles</strong> multiplataforma, modernas, fluidas y diseñadas para ofrecer experiencias intuitivas y de alto rendimiento, tanto en entornos Android como iOS. Nuestro equipo de desarrollo web se especializa en sitios responsivos, con un diseño profesional, optimizados para buscadores y orientados a convertir visitantes en clientes. Además, contamos con un servicio de <strong>hosting web seguro</strong>, escalable y con soporte técnico personalizado, ideal para mantener tus plataformas digitales siempre disponibles. Desde emprendimientos hasta grandes empresas, ayudamos a construir soluciones robustas, sostenibles y con enfoque en resultados reales. En Lógica, combinamos tecnología, diseño y estrategia para llevar tu presencia digital al siguiente nivel.
        </p>
      </div>
      <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{height: '100%'}}>
        <img
          src={servicios}
          alt="Servicios digitales de Lógica"
          className="img-fluid rounded shadow"
          style={{ maxWidth: '100%', height: 'auto', marginBottom: 0 }}
        />
      </div>
    </div>


  </Container>
</section>

      {/* Por qué elegirnos */}
      <section className="py-5 bg-white" aria-label="Ventajas de trabajar con Lógica">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">¿Por qué elegir Lógica?</h2>
<div className="mb-4">
  <img src={bannerPorQueElegir} alt="Banner ¿Por qué elegir Lógica?" style={{maxWidth: '1200px', width: '100%', height: 'auto', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}} className="img-fluid d-block mx-auto" loading="lazy" />
</div>
          <div className="row text-center g-5">
            {[
              { icon: 'laptop', title: 'Experiencia', text: 'Más de 3 años desarrollando soluciones con tecnologías modernas e IA.' },
              { icon: 'shield-check', title: 'Seguridad', text: 'Aplicamos buenas prácticas en ciberseguridad y desarrollo seguro.' },
              { icon: 'arrows-fullscreen', title: 'Escalabilidad', text: 'Soluciones modulares que crecen contigo y se adaptan a nuevos desafíos.' },
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

      {/* Clientes */}
      <section className="py-5 seccion-espaciada bg-light" aria-label="Empresas que confían en nosotros">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Confían en Nosotros</h2>
          <div className="clientes-marquee-wrapper">
            <div className="clientes-marquee">
              {[cliente1, cliente2, cliente3, cliente4, cliente1, cliente2, cliente3, cliente4].map((logo, index) => (
                <img key={index} src={logo} alt={`Logo cliente ${index + 1}`} className="cliente-logo" loading="lazy" />
              ))}
            </div>
          </div>
        </Container>
      </section>
      <div className="separador"></div>


      {/* Tecnologías */}
      <section className="py-5 seccion-espaciada bg-white" aria-label="Tecnologías utilizadas por Lógica">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4 fw-bold">Tecnologías y Formación Continua</h2>
              <p className="text-muted mb-3">
                En <strong>Lógica</strong> usamos React, Java, Spring Boot, MySQL y Docker. Nos capacitamos constantemente para entregar soluciones actualizadas, eficientes y seguras.
              </p>
              <p className="text-muted">
                Participamos en cursos, bootcamps y certificaciones para mantenernos a la vanguardia del desarrollo tecnológico.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row text-center g-4">
                {techLogos.map((tech, index) => (
                  <div className="col-4" key={index}>
                    <img src={tech.src} alt={`Tecnología ${tech.name}`} title={tech.name} className="tech-logo" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="separador"></div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center" style={{ backgroundColor: '#1A2A44', color: 'white' }} aria-label="Llamado a la acción contacto">
        <Container>
          <img src={logo} alt="Logo de Lógica" height="150" className="mb-4" loading="lazy" />
          <h2 className="mb-3">¿Listo para dar el siguiente paso?</h2>
          <p className="mb-4">Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.</p>
          <a href="/contacto" className="btn btn-success btn-lg">
            Contáctanos Ahora
          </a>
        </Container>
      </section>

      {/* Proyectos */}
      <section className="py-5 bg-light" aria-label="Proyectos desarrollados por Lógica">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Nuestros Proyectos</h2>
          <div className="row text-center g-4">
            {[
              {
                name: 'Sistema de reservas de horas',
                image: proyecto2,
                desc: 'Permite agendar mantenciones y servicios técnicos integrados con WhatsApp.',
                link: 'https://drpcgamer.vercel.app/',
              },
              {
                name: 'Sistema de Cotización en tiempo real',
                image: proyecto1,
                desc: 'Aplicación web para cotizaciones en tiempo real de productos y servicios.',
                link: 'https://cotizador360.vercel.app/',
              },
              {
                name: 'Control360',
                image: proyecto3,
                desc: 'Sistema integral de control de bodega y activos de empresa.',
                link: '',
              },
            ].map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="project-box p-3 bg-white shadow-sm h-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    className="img-fluid mb-3"
                    style={{ maxHeight: '150px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                  <h5 className="fw-bold">{project.name}</h5>
                  <p className="text-muted">{project.desc}</p>
                  {project.link && (
                    <a href={project.link} className="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer">
                      Ver Proyecto
                    </a>
                  )}
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
