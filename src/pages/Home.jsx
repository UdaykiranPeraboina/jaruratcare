import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Jarurat Care</h1>
          <p className="hero-subtitle">
            Your trusted partner in healthcare management
          </p>
          <p className="hero-description">
            Efficient patient record management system designed to streamline healthcare operations
            and improve patient care quality.
          </p>
          <div className="hero-actions">
            <Link to="/patients" className="btn btn-primary">
              View Patients
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="medical-icon">🏥</div>
            <div className="floating-card card-1">
              <span>👨‍⚕️</span>
              <span>Expert Care</span>
            </div>
            <div className="floating-card card-2">
              <span>📊</span>
              <span>Digital Records</span>
            </div>
            <div className="floating-card card-3">
              <span>🔒</span>
              <span>Secure Data</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Patient Records</h3>
            <p>Comprehensive digital records for all patients with easy access and management</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Quick Search</h3>
            <p>Find patient information instantly with our powerful search functionality</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Responsive</h3>
            <p>Access patient data from any device, anywhere, anytime</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Platform</h3>
            <p>Your data is protected with industry-standard security measures</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Patients Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Healthcare Providers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">System Availability</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime Guarantee</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
