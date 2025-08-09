import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">NeuroWave AI</div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#specs">Specs</a>
        <a href="#pricing">Pricing</a>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">NeuroWave AI</h1>
      <h2 class="hero-subtitle">The future of brain signal analysis</h2>
      <p class="hero-description">Experience the revolutionary brain wave signal AI reader that transforms neural activity into actionable insights with unprecedented accuracy.</p>
      <div class="hero-cta">
        <button class="btn-primary">Pre-order Now</button>
        <button class="btn-secondary">Watch Demo</button>
      </div>
    </div>
    <div class="hero-image">
      <div class="device-mockup">
        <div class="device-screen">
          <div class="brain-wave-animation"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Advanced Neural Processing</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🧠</div>
          <h3>Real-time Analysis</h3>
          <p>Process brain signals in real-time with sub-millisecond precision using advanced AI algorithms.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔬</div>
          <h3>Medical Grade Accuracy</h3>
          <p>FDA-approved precision with 99.7% accuracy in neural pattern recognition.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔐</div>
          <h3>Privacy First</h3>
          <p>Your neural data stays secure with end-to-end encryption and local processing.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Seamless Integration</h3>
          <p>Connect effortlessly with your devices through our intuitive mobile and desktop apps.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="showcase">
    <div class="showcase-content">
      <div class="showcase-text">
        <h2>Precision Beyond Imagination</h2>
        <p>Our proprietary neural network processes over 10,000 data points per second, delivering insights that were previously impossible to achieve.</p>
        <ul class="showcase-features">
          <li>Multi-channel EEG processing</li>
          <li>Advanced artifact removal</li>
          <li>Real-time frequency analysis</li>
          <li>Personalized baselines</li>
        </ul>
      </div>
      <div class="showcase-visual">
        <div class="brain-visualization">
          <div class="brain-outline"></div>
          <div class="neural-activity"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="specs" class="specs">
    <div class="container">
      <h2 class="section-title">Technical Specifications</h2>
      <div class="specs-grid">
        <div class="spec-category">
          <h3>Hardware</h3>
          <ul>
            <li>32-channel high-resolution EEG</li>
            <li>Sampling rate: 2kHz per channel</li>
            <li>Battery life: 24+ hours</li>
            <li>Weight: 280g</li>
          </ul>
        </div>
        <div class="spec-category">
          <h3>Software</h3>
          <ul>
            <li>AI-powered signal processing</li>
            <li>Custom neural network</li>
            <li>Real-time visualization</li>
            <li>Cloud sync capabilities</li>
          </ul>
        </div>
        <div class="spec-category">
          <h3>Connectivity</h3>
          <ul>
            <li>Bluetooth 5.2</li>
            <li>Wi-Fi 6E</li>
            <li>USB-C charging</li>
            <li>Mobile app support</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="pricing">
    <div class="container">
      <h2 class="section-title">Get Your NeuroWave AI</h2>
      <div class="pricing-card">
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">2,999</span>
        </div>
        <p class="price-description">Complete NeuroWave AI system with premium support</p>
        <ul class="pricing-features">
          <li>NeuroWave AI device</li>
          <li>Professional software suite</li>
          <li>1 year premium support</li>
          <li>Free software updates</li>
          <li>30-day money-back guarantee</li>
        </ul>
        <button class="btn-primary large">Pre-order Now</button>
        <p class="availability">Expected delivery: Q2 2025</p>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">NeuroWave AI</div>
        <p>Advancing the future of neural technology</p>
      </div>
    </div>
  </footer>
`
