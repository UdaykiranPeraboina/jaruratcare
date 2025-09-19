import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <h1>🏥 Jarurat Care</h1>
          </NavLink>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/patients"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setMobileMenuOpen(false)}
          >
            Patients
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
