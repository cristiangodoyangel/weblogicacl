import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

function Contacto() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verified) {
      alert('Por favor verifica que no eres un robot');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/cristian@weblogica.cl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Nuevo contacto - WebLogica',
          _template: 'table'
        })
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
        setVerified(false);
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SEO HEAD */}
      <Helmet>
        <title>Contacto | Lógica - Desarrollo Web en Chile</title>
        <meta
          name="description"
          content="Contáctanos para desarrollar tu sitio web, app móvil o software a medida. Estamos en Antofagasta y trabajamos en todo Chile."
        />
        <link rel="canonical" href="https://weblogica.cl/contacto" />
        <meta property="og:title" content="Contacto | Lógica" />
        <meta property="og:description" content="¿Tienes un proyecto? Conversemos. Contáctanos por WhatsApp, correo o formulario." />
        <meta property="og:url" content="https://weblogica.cl/contacto" />
        <meta property="og:image" content="https://weblogica.cl/logica.png" />
      </Helmet>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contacto | Lógica",
          "url": "https://weblogica.cl/contacto",
          "description": "Formulario de contacto y canales de comunicación de Lógica. Desarrollo web, apps y software desde Antofagasta, Chile.",
          "publisher": {
            "@type": "Organization",
            "name": "Lógica",
            "url": "https://weblogica.cl"
          },
          "contactOption": [
            {
              "@type": "ContactPoint",
              "telephone": "+56 9 4185 3607",
              "contactType": "customer service",
              "availableLanguage": "Spanish"
            }
          ]
        })}
      </script>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Mensaje Enviado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Página de contacto */}
      <section className="py-5" aria-label="Formulario de contacto de Lógica">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Contáctanos</h2>

          {/* Canales de contacto */}
          <Row className="g-4 mb-5">
            <Col md={3} sm={6}>
              <a href="mailto:cristian@weblogica.cl" className="contact-card-link">
                <div className="contact-card text-center p-4">
                  <FaEnvelope className="contact-icon mb-2" />
                  <h5 className="text-logica-green">Email</h5>
                  <p>cristian@weblogica.cl</p>
                </div>
              </a>
            </Col>

            <Col md={3} sm={6}>
              <a href="tel:+56941853607" className="contact-card-link">
                <div className="contact-card text-center p-4">
                  <FaPhone className="contact-icon mb-2" />
                  <h5 className="text-logica-green">Teléfono</h5>
                  <p>+56 9 4185 3607</p>
                </div>
              </a>
            </Col>

            <Col md={3} sm={6}>
              <a href="https://wa.me/56941853607" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                <div className="contact-card text-center p-4">
                  <FaWhatsapp className="contact-icon mb-2" />
                  <h5 className="text-logica-green">WhatsApp</h5>
                  <p>+56 9 4185 3607</p>
                </div>
              </a>
            </Col>

            <Col md={3} sm={6}>
              <a href="https://www.linkedin.com/company/weblógica" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                <div className="contact-card text-center p-4">
                  <FaLinkedin className="contact-icon mb-2" />
                  <h5 className="text-logica-green">LinkedIn</h5>
                  <p>Conectemos</p>
                </div>
              </a>
            </Col>
          </Row>

          {/* Formulario */}
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="contact-form-wrapper p-4 rounded bg-white shadow-sm">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Tu correo electrónico"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto"
                      required
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-center mb-4">
                    <ReCAPTCHA
                      sitekey="6LfZBgwrAAAAAIhdR5ClC839WZ3lFjxGNo_J3bRk"
                      onChange={() => setVerified(true)}
                    />
                  </div>

                  <Button type="submit" className="btn btn-logica  w-100 py-2" disabled={loading || !verified}>
                    {loading ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contacto;
