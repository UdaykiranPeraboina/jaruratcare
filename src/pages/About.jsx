import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Jarurat Care</h1>
        <p>Revolutionizing Healthcare Management</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Jarurat Care, we are committed to transforming healthcare management through 
            innovative digital solutions. Our mission is to make patient record management 
            seamless, efficient, and accessible to healthcare providers everywhere.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            We provide a comprehensive patient management system that enables healthcare 
            providers to:
          </p>
          <ul>
            <li>Maintain detailed patient records digitally</li>
            <li>Access patient information instantly from anywhere</li>
            <li>Track patient history and treatment progress</li>
            <li>Streamline appointment scheduling and management</li>
            <li>Generate reports and analytics for better decision-making</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our service delivery</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>Building trust through transparency and reliable service</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Continuously innovating to meet evolving healthcare needs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Care</h3>
              <p>Putting patient care at the heart of everything we do</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Why Choose Jarurat Care?</h2>
          <div className="features-list">
            <div className="feature">
              <span className="feature-check">✓</span>
              <span>User-friendly interface designed for healthcare professionals</span>
            </div>
            <div className="feature">
              <span className="feature-check">✓</span>
              <span>Secure and compliant with healthcare data regulations</span>
            </div>
            <div className="feature">
              <span className="feature-check">✓</span>
              <span>24/7 availability and technical support</span>
            </div>
            <div className="feature">
              <span className="feature-check">✓</span>
              <span>Regular updates and feature enhancements</span>
            </div>
            <div className="feature">
              <span className="feature-check">✓</span>
              <span>Scalable solution that grows with your practice</span>
            </div>
          </div>
        </section>

        <section className="about-section contact-section">
          <h2>Get In Touch</h2>
          <p>Have questions or need assistance? We're here to help!</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>contact@jaruratcare.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Healthcare Ave, Medical District, MD 12345</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
