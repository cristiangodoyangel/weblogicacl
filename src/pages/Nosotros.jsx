import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import dev1 from '../assets/webs/dev1.jpg';
import dev2 from '../assets/webs/dev2.jpg';

function Nosotros() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
        <title>Quiénes Somos | Lógica - Desarrollo de Software en Chile</title>
        <meta 
          name="description" 
          content="Conoce a Lógica: empresa chilena especializada en desarrollo de software, inteligencia artificial y automatización digital para empresas en crecimiento." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lógica",
            "url": "https://weblogica.cl",
            "logo": "https://weblogica.cl/logica.png",
            "description": "Desarrollo de software, inteligencia artificial, automatización y soluciones digitales en Chile.",
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

      <section className="py-5">
        <Container>
          {/* Introducción */}
          <header className="text-center mb-5">
            <h1 className="text-logica-green">Quiénes Somos</h1>
            <p className="py-3">
  En <strong>Lógica</strong>, creemos que la tecnología debe estar al servicio de las personas. Somos una <strong>empresa de desarrollo de software en Chile</strong> que ofrece soluciones digitales modernas, eficientes y centradas en las personas.
</p>
<p>
  Nuestro equipo nació en el norte de Chile y hoy colaboramos con empresas de distintas regiones, acompañándolas en su <strong>transformación digital</strong> mediante <strong>automatización de procesos</strong>, <strong>desarrollo de apps móviles</strong> y <strong>servicios en la nube</strong>.
</p>
<p>
  Nos impulsa la <strong>innovación con propósito</strong>, la <strong>excelencia técnica</strong> y un profundo <strong>compromiso con cada cliente</strong>, ayudando a sus negocios a crecer con tecnología útil y sostenible.
</p>

          </header>

          {/* Historia */}
          <section className="mb-5" aria-labelledby="historia-title">
            <h2 id="historia-title" className="text-center mb-4 text-logica-green">Nuestra Historia</h2>
            <div className="d-flex flex-column gap-4">
              {[
                {
                  year: "2021",
                  content: "Iniciamos desarrollando sitios web en PHP y MySQL para pequeñas empresas y e-commerce."
                },
                {
                  year: "2023",
                  content: "Adoptamos tecnologías modernas como .NET, Java y React. Creamos software escalable y multiplataforma."
                },
                {
                  year: "2024",
                  content: <>
                    Completamos formación en <strong>Oracle Next Education</strong> con enfoque en <strong>Backend Java</strong>.
                    <p className="mt-2">
                      Ver credenciales en <a href="https://www.linkedin.com/in/cristian-godoy-angel/details/certifications/" target="_blank" rel="noopener noreferrer" className="text-logica-green link-normal">LinkedIn</a>.
                    </p>
                  </>
                },
                {
                  year: "2024",
                  content: "Creamos Inventario360 e incorporamos inteligencia artificial en soluciones educativas."
                },
                {
                  year: "2025",
                  content: "Fundamos Lógica como marca tecnológica para acelerar la transformación digital en empresas chilenas."
                }
              ].map((item, index) => (
                <article key={index} className="historia-card p-4">
                  <h3 className="text-logica-green h5">{item.year}</h3>
                  <div className="historia-content">
                    <p className="mb-0">{item.content}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Filosofía */}
          <section className="mb-5" aria-labelledby="filosofia-title">
            <h2 id="filosofia-title" className="text-center mb-4 text-logica-green">Nuestra Filosofía</h2>
            <Row className="g-4">
              {[
                {
                  title: "Misión",
                  content: "Impulsar la transformación digital con soluciones eficientes, seguras y personalizadas."
                },
                {
                  title: "Visión",
                  content: "Ser referentes en Chile y Latinoamérica en inteligencia artificial y desarrollo de software."
                },
                {
                  title: "Valores",
                  content: "Innovación, compromiso, excelencia, ética, colaboración y pasión por la tecnología."
                }
              ].map((item, index) => (
                <Col md={4} key={index}>
                  <Card className="armaweb-card h-100">
                    <Card.Body className="text-center">
                      <h3 className="h6 text-logica-green">{item.title}</h3>
                      <p>{item.content}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* Equipo */}
          <section aria-labelledby="equipo-title">
            <h2 id="equipo-title" className="text-center mb-4 text-logica-green">Nuestro Equipo</h2>
            <Row className="justify-content-center g-4">
              {[
                {
                  img: dev1,
                  name: "Cristian Andrés Godoy",
                  role: "Full Stack Developer",
                  skills: "Experto en Python.NET, Java, React, SQL Server, AWS, automatización y arquitectura de software."
                },
                {
                  img: dev2,
                  name: "Victor Alcayaga",
                  role: "Desarrollador Backend",
                  skills: "Especialista en C#, Flutter, React, MySQL y MongoDB."
                }
              ].map((member, index) => (
                <Col md={4} key={index}>
                  <Card className="armaweb-card h-100">
                    <Card.Img
                      variant="top"
                      src={member.img}
                      alt={`Foto profesional de ${member.name}, ${member.role}`}
                      className="equipo-img"
                    />
                    <Card.Body className="text-center">
                      <h3 className="h6 text-logica-green">{member.name}</h3>
                      <p className="mb-1">{member.role}</p>
                      <p className="small mb-0">{member.skills}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
      </section>
    </>
  );
}

export default Nosotros;
