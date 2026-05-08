import Hero from '../components/Hero';
import About from '../components/About';
import Speciality from '../components/Speciality';
import ProductCard from '../components/ProductCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/products';

function Home({ setCurrentView }) {
  const titleRef = useScrollAnimation();
  const btnRef = useScrollAnimation();
  const promoRef = useScrollAnimation();

  const featuredProducts = products.slice(0, 3);

  return (
    <main id="view-home" className="page-view active">
      <Hero setCurrentView={setCurrentView} />
      <About setCurrentView={setCurrentView} />
      <Speciality />

      <section className="products-container" style={{ minHeight: 'auto' }}>
        <h2 ref={titleRef} className="section-title animate-on-scroll">Trending <span>Now</span></h2>
        <div id="featured-grid" className="product-grid">
          {featuredProducts.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button ref={btnRef} onClick={() => setCurrentView('products')} className="cta-button outline animate-on-scroll">See All Products</button>
        </div>
      </section>

      <section ref={promoRef} className="promo-banner animate-on-scroll">
        <h2>The Audio Revolution is Here</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Discover our latest wholesale collection of noise-canceling earphones.</p>
        <button onClick={() => setCurrentView('products')} className="cta-button">Shop Audio</button>
      </section>
    </main>
  );
}

export default Home;
