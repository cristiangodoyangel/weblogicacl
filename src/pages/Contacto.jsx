import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contacto() {
  return (
    <>
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Contáctanos</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="tucorreo@email.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." />
                </Form.Group>

                <Button variant="success" type="submit">
                  Enviar
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contacto;
