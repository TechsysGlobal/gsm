import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProductCard({ product, index }) {
  const scrollRef = useScrollAnimation();
  const delay = index !== undefined ? `${index * 0.1}s` : '0s';

  const defaultImage = "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80";

  return (
    <div
      ref={scrollRef}
      className="product-card animate-on-scroll"
      style={{ animationDelay: delay }}
    >
      <div className="product-img-wrapper">
        <img 
          src={product.image || defaultImage} 
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImage }}
          alt={product.name} 
          loading="lazy" 
        />
      </div>
      <div className="product-info">
        <span className="product-brand">{product.brand} • {product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
