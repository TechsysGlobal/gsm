import { useState, useEffect } from 'react';

function Navbar({ currentView, setCurrentView }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="brand" onClick={() => setCurrentView('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.svg" alt="GSM Logo" style={{ width: '140px', height: 'auto', transition: 'transform var(--transition-smooth)' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
        <ul className="nav-links">
          <li>
            <button
              onClick={() => setCurrentView('home')}
              className={currentView === 'home' ? 'active' : ''}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentView('products')}
              className={currentView === 'products' ? 'active' : ''}
            >
              Products
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
