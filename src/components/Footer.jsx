function Footer() {
  return (
    <footer>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ color: 'var(--cyan)', letterSpacing: '2px' }}>GSM</h2>
        <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 GSM Electronics Wholesale. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
