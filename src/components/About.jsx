import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About({ setCurrentView }) {
  const scrollRefText = useScrollAnimation();
  const scrollRefImg = useScrollAnimation();

  return (
    <section className="about-section">
      <div ref={scrollRefText} className="about-text animate-on-scroll">
        <h2 className="section-title" style={{ textAlign: 'left' }}>Defining the <span>Standard</span></h2>
        <p>At GSM, we don't just distribute electronics; we elevate the supply chain. Operating at the intersection of B2B scale and B2C precision, we ensure the world's most sought-after devices reach your hands effortlessly.</p>
        <p>Every smartphone and audio device in our catalog passes rigorous authenticity checks, ensuring that our partners and retail clients receive nothing but absolute perfection.</p>
        <button onClick={() => setCurrentView('products')} className="cta-button outline" style={{ marginTop: '1rem' }}>View Inventory</button>
      </div>
      <div ref={scrollRefImg} className="about-image animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
        <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80" alt="Electronics Warehouse" />
      </div>
    </section>
  );
}

export default About;
