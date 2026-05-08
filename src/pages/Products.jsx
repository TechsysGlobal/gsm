import ProductCard from '../components/ProductCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/products';

function Products() {
  const headerRef = useScrollAnimation();
  const textRef = useScrollAnimation();

  return (
    <main id="view-products" className="page-view active">
      <section className="page-header">
        <h1 ref={headerRef} className="animate-on-scroll">Our Collection</h1>
        <p ref={textRef} className="animate-on-scroll" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
          Smartphones & High-Fidelity Audio
        </p>
      </section>

      <section className="products-container">
        <div id="product-grid" className="product-grid">
          {products.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
