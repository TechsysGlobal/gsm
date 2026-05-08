import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Speciality() {
  const scrollRef = useScrollAnimation();

  return (
    <section ref={scrollRef} className="speciality-section animate-on-scroll">
      <h2 className="section-title">The GSM <span>Advantage</span></h2>
      <div className="stats-grid">
        <div className="stat-box">
          <h3>1M+</h3>
          <p>Devices Shipped</p>
        </div>
        <div className="stat-box">
          <h3>100%</h3>
          <p>Authenticity</p>
        </div>
        <div className="stat-box">
          <h3>24h</h3>
          <p>Dispatch Time</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Global Brands</p>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          <span>APPLE</span> <span>SAMSUNG</span> <span>SONY</span> <span>GOOGLE</span> <span>BOSE</span> <span>XIAOMI</span> <span>ONEPLUS</span> <span>SENNHEISER</span>
          <span>APPLE</span> <span>SAMSUNG</span> <span>SONY</span> <span>GOOGLE</span> <span>BOSE</span> <span>XIAOMI</span> <span>ONEPLUS</span> <span>SENNHEISER</span>
        </div>
      </div>
    </section>
  );
}

export default Speciality;
