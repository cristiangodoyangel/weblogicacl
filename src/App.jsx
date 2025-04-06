import CustomNavbar from './components/CustomNavbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ArmaTuWeb from './pages/ArmaTuWeb';





function App() {
  return (
    <> 
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/arma-tu-web" element={<ArmaTuWeb />} />
      

      </Routes>
      <Footer />
    </>
  );
}

export default App;
