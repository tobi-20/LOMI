import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from './sections/Hero';
import AboutStrip from './sections/AboutStrip';
import ImpactAreas from './sections/ImpactAreas';
import DonateCTA from './sections/DonateCTA';
import Footer from './components/Footer';
import Donate from './pages/Donate';

import About from './pages/About';

import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import MissionStrip from './sections/MissionStrip';
import BrandVideo from './sections/BrandVideo';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutStrip />
              <ImpactAreas />
              <BrandVideo />
              <MissionStrip />
              <DonateCTA />
            </>
          }
        />
        <Route path="/about" element={<About />} />

        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="pt-18">
        <AnimatedRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
