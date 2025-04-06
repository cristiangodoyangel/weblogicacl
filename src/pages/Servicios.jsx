import React from 'react';
import { Container } from 'react-bootstrap';
import ArmaTuWeb from './ArmaTuWeb';

function Servicios() {
  return (
    <>
      {/* SEO Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lógica",
          "url": "https://weblogica.cl",
          "logo": "https://weblogica.cl/logica.png",
          "description": "Lógica ofrece desarrollo web, apps móviles, software a medida, servicios en la nube y marketing digital en Chile.",
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

      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Nuestros Servicios</h2>
          <div className="row text-center g-5">
            {[
              {
                icon: 'bi-code-slash',
                title: 'Desarrollo Web y Software',
                text: 'Aplicaciones web plataformas digitales a medida, usando tecnologías como Java, React y Spring Boot.',
              },
              {
                icon: 'bi-phone',
                title: 'Apps Móviles',
                text: 'Desarrollamos apps nativas y multiplataforma para Android y iOS, intuitivas, seguras y pensadas para escalar.',
              },
              {
                icon: 'bi-graph-up',
                title: 'SEO y Marketing Digital',
                text: 'Mejoramos tu presencia online, diseño orientado a conversión y posicionamiento en buscadores.',
              },
              {
                icon: 'bi-cloud',
                title: 'Infraestructura en la Nube',
                text: 'Implementamos soluciones escalables en AWS, Oracle Cloud y Azure. Migraciones, backups, y despliegue continuo.',
              },
              {
                icon: 'bi-box-seam',
                title: 'Sistemas de Inventario y Logística',
                text: 'Creamos plataformas como Inventario360 para controlar activos, herramientas, stock y trazabilidad de manera visual y eficiente.',
              },
              {
                icon: 'bi-bank',
                title: 'Sistemas Robustos y Escalables',
                text: 'Diseñamos arquitecturas que crecen contigo. Empieza simple y agrega módulos según las necesidades de tu empresa.',
              },
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-no-card">
                  <i className={`bi ${service.icon}`}></i>
                  <h5 style={{ fontWeight: 700, fontSize: '1.35rem', marginBottom: '0.5rem' }}>{service.title}</h5>
                  <p style={{ color: '#333', fontSize: '1.2rem', margin: '0 auto', maxWidth: '260px', lineHeight: '1.6' }}>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <ArmaTuWeb />
    </>
  );
}

export default Servicios;
