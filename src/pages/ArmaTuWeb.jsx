import React, { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { seccionesDisponibles } from '../data/seccionesDisponibles';

function ArmaTuWeb() {
  const [seleccionadas, setSeleccionadas] = useState(
    seccionesDisponibles.filter(s => s.incluidaPorDefecto)
  );

  const toggleSeleccion = (seccion) => {
    const existe = seleccionadas.find(s => s.id === seccion.id);
    if (existe) {
      setSeleccionadas(seleccionadas.filter(s => s.id !== seccion.id));
    } else {
      setSeleccionadas([...seleccionadas, seccion]);
    }
  };

  const total = seleccionadas.reduce((acc, s) => acc + s.precio, 0);

  // 🔗 Generar mensaje para WhatsApp
  const generarLinkWhatsApp = () => {
    const lista = seleccionadas
      .map(s => `• ${s.nombre} - $${s.precio.toLocaleString('es-CL')}`)
      .join('\n');

    const mensaje = `Hola, me interesa esta cotización para una web personalizada:\n\n${lista}\n\nTotal estimado: $${total.toLocaleString('es-CL')}\n\n¿Podemos conversar?`;

    const url = `https://wa.me/56941853607?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4 text-logica-green">Arma tu Web</h2>
        <p className="text-center mb-5">
          Selecciona las secciones que necesitas y calcula el valor final de tu sitio web.
        </p>

        <div className="text-center mt-4">
          <h4>Total estimado: <span className="text-logica-green">${total.toLocaleString('es-CL')}</span></h4>
        </div>

        <div className="row g-4 mt-3">
          {seccionesDisponibles.map((seccion) => {
            const activa = seleccionadas.some(s => s.id === seccion.id);
            return (
              <div className="col-md-6 col-lg-4" key={seccion.id}>
                <Card className={`h-100 shadow-sm ${activa ? 'border-success' : ''}`}>
                  <Card.Body>
                    <Card.Title className="fw-bold">{seccion.nombre}</Card.Title>
                    <Card.Text>{seccion.descripcion}</Card.Text>
                    <p className="fw-bold text-end text-logica-green">
                      ${seccion.precio.toLocaleString('es-CL')}
                    </p>
                    <Button
                      variant={activa ? 'danger' : 'success'}
                      onClick={() => toggleSeleccion(seccion)}
                      className="w-100"
                    >
                      {activa ? 'Quitar sección' : 'Agregar sección'}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>

        {/* 🟢 Botón de cotización */}
        <div className="text-center mt-5">
          <Button
            variant="success"
            size="lg"
            onClick={generarLinkWhatsApp}
          >
            💬 Quiero esta cotización
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ArmaTuWeb;
