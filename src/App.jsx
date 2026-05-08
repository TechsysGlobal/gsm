import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  return (
    <>
      {/* Background Blobs & Shapes */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      {currentView === 'home' && <Home setCurrentView={setCurrentView} />}
      {currentView === 'products' && <Products />}
      
      <Footer />
    </>
  );
}

export default App;
