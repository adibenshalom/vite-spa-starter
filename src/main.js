import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo" data-aos="fade-down" data-aos-duration="1000">NeuroWave AI</div>
      <div class="nav-links" data-aos="fade-down" data-aos-delay="200">
        <a href="#features">Features</a>
        <a href="#specs">Specs</a>
        <a href="#pricing">Pricing</a>
      </div>
    </div>
  </nav>

  <section class="hero parallax-hero">
    <div class="parallax-bg" data-parallax="0.5"></div>
    <div class="hero-content">
      <h1 class="hero-title" data-aos="zoom-in" data-aos-duration="1200">NeuroWave AI</h1>
      <h2 class="hero-subtitle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">The future of brain signal analysis</h2>
      <p class="hero-description" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Experience the revolutionary brain wave signal AI reader that transforms neural activity into actionable insights with unprecedented accuracy.</p>
      <div class="hero-cta" data-aos="fade-up" data-aos-delay="900">
        <button class="btn-primary" data-aos="flip-left" data-aos-delay="1200">Pre-order Now</button>
        <button class="btn-secondary" data-aos="flip-right" data-aos-delay="1400">Watch Demo</button>
      </div>
    </div>
    <div class="hero-image" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1500">
      <div class="device-mockup">
        <div class="device-screen">
          <div class="brain-wave-animation"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="features parallax-section">
    <div class="parallax-bg" data-parallax="0.3"></div>
    <div class="container">
      <h2 class="section-title" data-aos="fade-up" data-aos-duration="1000">Advanced Neural Processing</h2>
      <div class="features-grid">
        <div class="feature-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          <div class="feature-icon">🧠</div>
          <h3>Real-time Analysis</h3>
          <p>Process brain signals in real-time with sub-millisecond precision using advanced AI algorithms.</p>
        </div>
        <div class="feature-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <div class="feature-icon">🔬</div>
          <h3>Medical Grade Accuracy</h3>
          <p>FDA-approved precision with 99.7% accuracy in neural pattern recognition.</p>
        </div>
        <div class="feature-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
          <div class="feature-icon">🔐</div>
          <h3>Privacy First</h3>
          <p>Your neural data stays secure with end-to-end encryption and local processing.</p>
        </div>
        <div class="feature-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          <div class="feature-icon">📱</div>
          <h3>Seamless Integration</h3>
          <p>Connect effortlessly with your devices through our intuitive mobile and desktop apps.</p>
        </div>
        <div class="feature-card" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
          <div class="feature-icon">⚡</div>
          <h3>Ultra-Low Latency</h3>
          <p>Experience instant brain signal processing with sub-10ms latency for real-time applications.</p>
        </div>
        <div class="feature-card" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
          <div class="feature-icon">🎯</div>
          <h3>Adaptive Learning</h3>
          <p>AI continuously learns your unique neural patterns for increasingly personalized insights.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="showcase parallax-section">
    <div class="parallax-bg" data-parallax="0.4"></div>
    <div class="showcase-content">
      <div class="showcase-text" data-aos="slide-right" data-aos-duration="1000">
        <h2>Precision Beyond Imagination</h2>
        <p>Our proprietary neural network processes over 10,000 data points per second, delivering insights that were previously impossible to achieve.</p>
        <ul class="showcase-features">
          <li data-aos="fade-right" data-aos-delay="200">Multi-channel EEG processing</li>
          <li data-aos="fade-right" data-aos-delay="300">Advanced artifact removal</li>
          <li data-aos="fade-right" data-aos-delay="400">Real-time frequency analysis</li>
          <li data-aos="fade-right" data-aos-delay="500">Personalized baselines</li>
        </ul>
      </div>
      <div class="showcase-visual" data-aos="slide-left" data-aos-duration="1000">
        <div class="brain-visualization">
          <div class="brain-outline"></div>
          <div class="neural-activity"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="specs" class="specs parallax-section">
    <div class="parallax-bg" data-parallax="0.6"></div>
    <div class="container">
      <h2 class="section-title" data-aos="zoom-in" data-aos-duration="1000">Technical Specifications</h2>
      <div class="specs-table-container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
        <table class="specs-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Specification</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="4" class="category-cell">Hardware</td>
              <td>EEG Channels</td>
              <td>32-channel high-resolution</td>
            </tr>
            <tr>
              <td>Sampling Rate</td>
              <td>2kHz per channel</td>
            </tr>
            <tr>
              <td>Battery Life</td>
              <td>24+ hours continuous use</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>280g (lightweight design)</td>
            </tr>
            <tr>
              <td rowspan="4" class="category-cell">Software</td>
              <td>AI Processing</td>
              <td>Advanced neural network algorithms</td>
            </tr>
            <tr>
              <td>Neural Network</td>
              <td>Custom-trained deep learning model</td>
            </tr>
            <tr>
              <td>Visualization</td>
              <td>Real-time 3D brain activity mapping</td>
            </tr>
            <tr>
              <td>Cloud Sync</td>
              <td>Secure encrypted data synchronization</td>
            </tr>
            <tr>
              <td rowspan="4" class="category-cell">Connectivity</td>
              <td>Wireless</td>
              <td>Bluetooth 5.2 + Wi-Fi 6E</td>
            </tr>
            <tr>
              <td>Charging</td>
              <td>USB-C fast charging (2 hours)</td>
            </tr>
            <tr>
              <td>Mobile Support</td>
              <td>iOS 15+ / Android 12+</td>
            </tr>
            <tr>
              <td>Desktop Support</td>
              <td>Windows 11, macOS 12+, Linux</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section id="pricing" class="pricing parallax-section">
    <div class="parallax-bg" data-parallax="0.2"></div>
    <div class="container">
      <h2 class="section-title" data-aos="flip-up" data-aos-duration="1000">Get Your NeuroWave AI</h2>
      <div class="pricing-card" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
        <div class="price" data-aos="bounce" data-aos-delay="800">
          <span class="currency">$</span>
          <span class="amount">2,999</span>
        </div>
        <p class="price-description" data-aos="fade-up" data-aos-delay="1000">Complete NeuroWave AI system with premium support</p>
        <ul class="pricing-features">
          <li data-aos="slide-up" data-aos-delay="1200">NeuroWave AI device</li>
          <li data-aos="slide-up" data-aos-delay="1300">Professional software suite</li>
          <li data-aos="slide-up" data-aos-delay="1400">1 year premium support</li>
          <li data-aos="slide-up" data-aos-delay="1500">Free software updates</li>
          <li data-aos="slide-up" data-aos-delay="1600">30-day money-back guarantee</li>
        </ul>
        <button class="btn-primary large" data-aos="pulse" data-aos-delay="1800">Pre-order Now</button>
        <p class="availability" data-aos="fade-in" data-aos-delay="2000">Expected delivery: Q2 2025</p>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content" data-aos="fade-up" data-aos-duration="1000">
        <div class="footer-logo" data-aos="zoom-in" data-aos-delay="200">NeuroWave AI</div>
        <p data-aos="fade-up" data-aos-delay="400">Advancing the future of neural technology</p>
        <p class="copyright" data-aos="fade-up" data-aos-delay="600">© 2025 NeuroWave AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
      if (entry.target.classList.contains('feature-card')) {
        const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100
        entry.target.style.animationDelay = `${delay}ms`
      }
    }
  })
}, observerOptions)

// Initialize AOS and parallax effects
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 120,
    delay: 0,
    anchorPlacement: 'top-bottom'
  })
  
  // Initialize particle background
  createParticles()
  
  // Initialize parallax scrolling
  initParallax()
  
  // Enhanced smooth scrolling
  initSmoothScrolling()
})

// Advanced parallax scrolling system
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]')
  
  function updateParallax() {
    const scrollTop = window.pageYOffset
    
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.dataset.parallax)
      const yPos = -(scrollTop * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
    
    requestAnimationFrame(updateParallax)
  }
  
  requestAnimationFrame(updateParallax)
}

// Enhanced smooth scrolling
function initSmoothScrolling() {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Custom smooth scroll for better control
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })
}

// Particle animation system
function createParticles() {
  const particleContainer = document.createElement('div')
  particleContainer.classList.add('particles')
  document.body.appendChild(particleContainer)
  
  for (let i = 0; i < 50; i++) {
    createParticle(particleContainer)
  }
}

function createParticle(container) {
  const particle = document.createElement('div')
  particle.classList.add('particle')
  
  const size = Math.random() * 3 + 1
  const duration = Math.random() * 20 + 10
  const delay = Math.random() * 20
  
  particle.style.left = Math.random() * 100 + '%'
  particle.style.top = Math.random() * 100 + '%'
  particle.style.width = size + 'px'
  particle.style.height = size + 'px'
  particle.style.animationDuration = duration + 's'
  particle.style.animationDelay = delay + 's'
  
  container.appendChild(particle)
}
