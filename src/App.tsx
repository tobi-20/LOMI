import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from './sections/Hero';
import AboutStrip from './sections/AboutStrip';
import ImpactAreas from './sections/ImpactAreas';
import DonateCTA from './sections/DonateCTA';
import Footer from './components/Footer';
import Donate from './pages/Donate';
import Sermons from './pages/Sermons';
import About from './pages/About';
import Mission from './pages/Mission';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutStrip />
              <ImpactAreas />
              <DonateCTA />
            </>
          }
        />

        <Route
          path="/volunteer"
          element={<div className="p-8">Volunteer</div>}
        />
        <Route path="/donate" element={<Donate />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
