import CustomNavbar from './components/CustomNavbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';


function App() {
  return (
    <> 
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
