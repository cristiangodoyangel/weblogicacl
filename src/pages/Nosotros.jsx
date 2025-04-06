import React from 'react';
import { Container } from 'react-bootstrap';

function Nosotros() {
  return (
    <>
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 text-logica-green">Quiénes Somos</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <p>
                En <strong>Lógica</strong> creemos que la tecnología debe estar al servicio de las personas.
                Somos una empresa chilena que ofrece soluciones digitales modernas, eficientes y humanas para empresas que quieren destacar.
              </p>
              <p>
                Comenzamos en el norte de Chile y hoy trabajamos con compañías de distintas regiones,
                ayudándolas a transformar sus procesos a través del desarrollo de software, automatización, apps móviles y servicios en la nube.
              </p>
              <p>
                Nos mueve la innovación con propósito, la excelencia técnica y el compromiso con cada cliente.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Nosotros;
