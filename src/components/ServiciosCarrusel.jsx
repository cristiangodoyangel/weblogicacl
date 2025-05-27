import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ServiciosCarrusel.css';
import servicios from '../assets/servicios.png';
import carrusel1 from '../assets/carrusel1-Cspp61SS.png';
import carrusel2 from '../assets/carrusel2-B5mVSEQ1.png';
import carrusel3 from '../assets/carrusel3-CGux4aN-.png';
import carrusel4 from '../assets/carrusel4-zuFbwJx3.png';

const slides = [
  {
    img: servicios,
    desc: (
      <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: 0 }}>
        En <strong>Lógica</strong>, ofrecemos un abanico completo de servicios digitales diseñados para impulsar el crecimiento y la transformación tecnológica de tu empresa. Desarrollamos <strong>software a medida</strong> que automatiza procesos, reduce costos y se adapta exactamente a tus necesidades operativas. Creamos <strong>aplicaciones móviles</strong> multiplataforma, modernas, fluidas y diseñadas para ofrecer experiencias intuitivas y de alto rendimiento, tanto en entornos Android como iOS. Nuestro equipo de desarrollo web se especializa en sitios responsivos, con un diseño profesional, optimizados para buscadores y orientados a convertir visitantes en clientes. Además, contamos con un servicio de <strong>hosting web seguro</strong>, escalable y con soporte técnico personalizado, ideal para mantener tus plataformas digitales siempre disponibles. Desde emprendimientos hasta grandes empresas, ayudamos a construir soluciones robustas, sostenibles y con enfoque en resultados reales. En Lógica, combinamos tecnología, diseño y estrategia para llevar tu presencia digital al siguiente nivel.
      </p>
    ),
  },
  {
    img: carrusel1,
    desc: <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: 0 }}>Soluciones de software personalizadas para empresas exigentes.</p>,
  },
  {
    img: carrusel2,
    desc: <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: 0 }}>Apps móviles multiplataforma: modernas, intuitivas y de alto rendimiento.</p>,
  },
  {
    img: carrusel3,
    desc: <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: 0 }}>Sitios web profesionales, optimizados para buscadores y clientes.</p>,
  },
  {
    img: carrusel4,
    desc: <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginBottom: 0 }}>Hosting web seguro, escalable y con soporte técnico personalizado.</p>,
  },
];

const ServiciosCarrusel = () => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
    loop
    style={{ padding: '2rem 0' }}
  >
    {slides.map((slide, idx) => (
      <SwiperSlide key={idx}>
        <div className="servicios-carrusel-slide">
          <div className="servicios-carrusel-text">
            {slide.desc}
          </div>
          <div className="servicios-carrusel-img">
            <img
              src={slide.img}
              alt={typeof slide.desc === 'string' ? slide.desc : 'Servicios digitales de Lógica'}
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ServiciosCarrusel;
