import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/products';

function Hero({ setCurrentView }) {
  const scrollRef = useScrollAnimation();
  const floatingProducts = products.slice(0, 2);

  return (
    <header className="hero">
      <div className="hero-bg"></div>
      <div ref={scrollRef} className="hero-content animate-on-scroll">
        <div className="hero-text">
          <h1>Next-Gen Tech.<br /><span>Wholesale Power.</span></h1>
          <p>Your premium B2B & B2C gateway for top-tier mobile phones and audiophile earphones across all major global brands.</p>
          <button onClick={() => setCurrentView('products')} className="cta-button">Explore Catalog</button>
        </div>
        {/* Floating UI Component */}
        <div className="floating-ui">
          <div className="floating-ui-header">
            <span style={{ fontWeight: 600, color: 'var(--cyan)' }}>Live Stock Status</span>
            <div className="pulse-dot"></div>
          </div>
          {floatingProducts.map(p => (
            <div key={p.id} className="floating-ui-item">
              <img 
                src={p.image || "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=100&q=80"} 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=100&q=80" }}
                alt={p.name} 
              />
              <div className="floating-ui-details">
                <p className="floating-ui-name">{p.name}</p>
                <p className="floating-ui-stock">{p.stock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
