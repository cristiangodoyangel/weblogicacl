import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import { Container } from 'react-bootstrap';
import logo from '../assets/logica.png';
import bannerPorQueElegir from '../assets/bannerPorQueElegir.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import cliente1 from '../assets/clientes/m360.png';
import cliente2 from '../assets/clientes/pmt.png';
import cliente3 from '../assets/clientes/drpc.png';
import cliente4 from '../assets/clientes/c360.png';
import cliente5 from '../assets/clientes/htgrafica.png';
import cliente6 from '../assets/clientes/reyts.png';

const clientesData = [
  {
    logo: cliente1,
    alt: 'Motors360',
    url: 'https://www.motors360.cl/'
  },
  {
    logo: cliente2,
    alt: 'PM&T Integra',
    url: 'https://www.pmtintegra.cl/'
  },
  {
    logo: cliente6,
    alt: 'REYTS',
    url: 'https://www.reyts.cl/'
  },
  {
    logo: cliente3,
    alt: 'Dr PC Gamer',
    url: 'https://www.drpcgamer.cl/'
  },
  {
    logo: cliente4,
    alt: 'Control360',
    url: 'http://www.pmtapp.cl/'
  },
  {
    logo: cliente5,
    alt: 'HT Gráfica',
    url: 'https://www.htgrafica.cl/'
  },

];

import imagen1 from '../assets/slider/imagen1.jpg';
import imagen2 from '../assets/slider/imagen2.jpg';
import imagen3 from '../assets/slider/imagen3.jpg';
import imagen4 from '../assets/slider/imagen4.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, EffectCoverflow, EffectFlip, EffectCards, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';


import reactLogo from '../assets/tech/react.svg';
import java from '../assets/tech/java.svg';
import spring from '../assets/tech/spring.svg';
import mysql from '../assets/tech/mysql.svg';
import docker from '../assets/tech/docker.svg';
import github from '../assets/tech/github.svg';
import pandas from '../assets/tech/pandas.png';
import python from '../assets/tech/python.png';
import django from '../assets/tech/django.png';

import proyecto1 from '../assets/webs/i360.png';
import proyecto2 from '../assets/webs/drpc.png';
import proyecto3 from '../assets/webs/cotizador.png';
import proyecto4 from '../assets/webs/htgrafica.png';
import proyecto5 from '../assets/webs/m360.png';
import proyecto6 from '../assets/webs/pmt.png';

const techLogos = [
  { name: 'Python', src: python },
  { name: 'Django', src: django },
  { name: 'Pandas', src: pandas },
  { name: 'React', src: reactLogo },
  { name: 'Java', src: java },
  { name: 'Spring Boot', src: spring },
  { name: 'MySQL', src: mysql },
  { name: 'Docker', src: docker },
  { name: 'GitHub', src: github },


];

const imgStyle = {
  maxHeight: '420px',
  width: 'auto',
  margin: 'auto',
  display: 'block',
  objectFit: 'contain',
  height: '100%',
  borderRadius: 1,
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio | Lógica - Desarrollo Web y Software en Chile</title>
        <meta name="description" content="Lógica desarrolla sitios web, aplicaciones móviles y software a medida en Chile." />
        <link rel="canonical" href="https://weblogica.cl/" />
        <meta property="og:title" content="Lógica | Desarrollo Web y Software en Chile" />
        <meta property="og:description" content="Desarrollamos software, sitios web y apps móviles modernas con React, Java, Spring Boot y más." />
        <meta property="og:image" content="https://weblogica.cl/logica.png" />
        <meta property="og:url" content="https://weblogica.cl/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
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
      </Helmet>

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

          {/* Texto + Slider */}
          <div className="container my-5">
            <div className="row align-items-center" style={{ minHeight: 340 }}>
              <div className="col-md-6 d-flex h-100">
                <div className="d-flex flex-column justify-content-center w-100 h-100">
                <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: 0 }}>
          En <strong>Lógica</strong>, ofrecemos un abanico completo de servicios digitales diseñados para impulsar el crecimiento y la transformación tecnológica de tu empresa. Desarrollamos <strong>software a medida</strong> que automatiza procesos, reduce costos y se adapta exactamente a tus necesidades operativas. Creamos <strong>aplicaciones móviles</strong> multiplataforma, modernas, fluidas y diseñadas para ofrecer experiencias intuitivas y de alto rendimiento, tanto en entornos Android como iOS. Nuestro equipo de desarrollo web se especializa en sitios responsivos, con un diseño profesional, optimizados para buscadores y orientados a convertir visitantes en clientes. Además, contamos con un servicio de <strong>hosting web seguro</strong>, escalable y con soporte técnico personalizado, ideal para mantener tus plataformas digitales siempre disponibles. Desde emprendimientos hasta grandes empresas, ayudamos a construir soluciones robustas, sostenibles y con enfoque en resultados reales. En Lógica, combinamos tecnología, diseño y estrategia para llevar tu presencia digital al siguiente nivel.
        </p>
                </div>
              </div>
              <div className="col-md-6 d-flex h-100">
                <div className="hide-on-mobile" style={{
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  aspectRatio: '16/9',
  position: 'relative'
}}>
  <Swiper
    modules={[Autoplay, EffectCube]}
    effect="cube"
    speed={1200}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    style={{ width: '100%', height: '100%' }}
  >
    {[imagen1, imagen2, imagen3, imagen4].map((img, idx) => (
      <SwiperSlide key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={img}
          alt={`Slide ${idx + 1}`}
          style={{
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
          loading="lazy"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

       
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="py-5 bg-white" aria-label="Ventajas de trabajar con Lógica">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">¿Por qué elegir Lógica.?</h2>
          <style>{`
  @media (max-width: 630px) {
    .hide-on-mobile { display: none !important; }
  }
`}</style>
<div className="hide-on-mobile" style={{ width: '100%', maxWidth: '1350px', margin: '24px auto', display: 'flex', justifyContent: 'center' }}>
  <img
    src={bannerPorQueElegir}
    alt="Ventajas de Lógica"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: 'auto',
      boxShadow: '0 4px 24px rgba(0,0,0,0.13)'
    }}
    loading="lazy"
  />
</div>
          <div className="row text-center g-5">
            {[
              { icon: 'laptop', title: 'Experiencia', text: 'Más de 3 años desarrollando soluciones modernas e IA.' },
              { icon: 'shield-check', title: 'Seguridad', text: 'Buenas prácticas en ciberseguridad y desarrollo seguro.' },
              { icon: 'arrows-fullscreen', title: 'Escalabilidad', text: 'Soluciones modulares que se adaptan al crecimiento.' },
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
      <section className="py-5 bg-light" aria-label="Empresas que confían en nosotros">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Empresas que confían en Nosotros</h2>
          <div className="container">
            <div className="row justify-content-center g-4 mb-2">
              {clientesData.slice(0, 3).map((cliente, idx) => (
                <div className="col-12 col-sm-4 d-flex justify-content-center" key={idx}>
                  <div className="cliente-grid-item position-relative">
                    <a href={cliente.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={cliente.logo}
                        alt={cliente.alt}
                        className="cliente-grid-logo"
                        loading="lazy"
                        onMouseOver={e => e.currentTarget.nextSibling.style.opacity = 1}
                        onMouseOut={e => e.currentTarget.nextSibling.style.opacity = 0}
                        style={{ cursor: 'pointer' }}
                      />
                      <div className="cliente-tooltip" style={{ opacity: 0 }}>
                        <div><strong>{cliente.alt}</strong></div>
                        <div style={{ fontSize: '0.85em', color: '#00b35a' }}>{cliente.url}</div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-content-center g-4">
              {clientesData.slice(3, 6).map((cliente, idx) => (
                <div className="col-12 col-sm-4 d-flex justify-content-center" key={idx + 3}>
                  <div className="cliente-grid-item position-relative">
                    <a href={cliente.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={cliente.logo}
                        alt={cliente.alt}
                        className="cliente-grid-logo"
                        loading="lazy"
                        onMouseOver={e => e.currentTarget.nextSibling.style.opacity = 1}
                        onMouseOut={e => e.currentTarget.nextSibling.style.opacity = 0}
                        style={{ cursor: 'pointer' }}
                      />
                      <div className="cliente-tooltip" style={{ opacity: 0 }}>
                        <div><strong>{cliente.alt}</strong></div>
                        <div style={{ fontSize: '0.85em', color: '#00b35a' }}>{cliente.url}</div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* CTA */}
      <section className="py-5 text-center" style={{ backgroundColor: '#1A2A44', color: 'white' }} aria-label="Llamado a la acción contacto">
        <Container>
          <img src={logo} alt="Logo de Lógica" height="150" className="mb-4" loading="lazy" />
          <h2 className="mb-3">¿Listo para dar el siguiente paso?</h2>
          <p className="mb-4">Conversemos sobre cómo podemos ayudarte.</p>
          <a href="/contacto" className="btn btn-success btn-lg">Contáctanos Ahora</a>
        </Container>
      </section>

            {/* Tecnologías */}
            <section className="py-5 bg-white" aria-label="Tecnologías utilizadas por Lógica">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4 fw-bold">Tecnologías y Formación Continua</h2>
              <p className="text-muted mb-3">
                En <strong>Lógica</strong> usamos Python, Django, Pandas, Java, Spring Boot, React, MySQL y Docker. Nos capacitamos constantemente para entregar soluciones actualizadas, eficientes y seguras.

                Participamos en cursos, bootcamps y certificaciones para mantenernos a la vanguardia del desarrollo tecnológico.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row text-center g-4">
                {techLogos.map((tech, index) => (
                  <div className="col-4" key={index}>
                    <img src={tech.src} alt={`Logo ${tech.name}`} title={tech.name} className="tech-logo" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* Proyectos */}
      <section className="py-5 bg-light" aria-label="Proyectos desarrollados por Lógica">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Nuestros Proyectos</h2>
          <div className="row text-center g-4">
            {[proyecto1, proyecto2, proyecto3, proyecto4, proyecto5, proyecto6].map((image, index) => {
              const proyectos = [
                {
                  name: 'Control360',
                  desc: 'Sistema integral de control de bodega y activos de empresa, actualmente usado por una empresa minera en Chile.',
                  link: 'http://www.pmtapp.cl/',
                },
                {
                  name: 'Sistema de reservas de horas',
                  desc: 'Permite agendar citas, puede ser usado en gran varidad de negocios. sistema integrado con WhatsApp.',
                  link: 'https://reservadehoras.vercel.app/',
                },
                {
                  name: 'Sistema de Cotización en tiempo real',
                  desc: 'Aplicación web para cotizaciones en tiempo real de productos y servicios, se integra fácilmente a varias tecnologías.',
                  link: 'https://cotizador360.vercel.app/',
                },
                {
                  name: 'Página web para HT Grafica',
                  desc: 'Página web para empresa HT Gráfica, empresa que se dedica a la impresión y publicidad.',
                  link: 'https://www.htgrafica.cl/',
                },
                {
                  name: 'Página web para Motors360',
                  desc: 'Página web para empresa Motors360, empresa que provee equipamiento para la gran minería y servicios integrales.',
                  link: 'https://www.motors360.cl/',
                },

                {
                  name: 'Página web para PM&T Integra',
                  desc: 'Página web para empresa PM&T Integra, empresa especializada en proyectos de y soluciones informáticas, fibra óptica y conectividad.',
                  link: 'https://www.pmtintegra.cl/',
                },
               
              ];
              const p = proyectos[index];
              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="project-box p-3 shadow-sm h-100">
                    <img src={image} alt={p.name} className="project-img mb-4" loading="lazy" />
                    <h5 className="fw-bold">{p.name}</h5>
                    <p className="text-muted">{p.desc}</p>
                    {p.link && (
                      <a href={p.link} className="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer">
                        Ver Proyecto
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
