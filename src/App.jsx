import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">PATH<span>BRIDGE</span></div>
        <ul className="nav-links">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink></li>
          <li><NavLink to="/faq" className={({isActive}) => isActive ? 'active' : ''}>FAQ</NavLink></li>
        </ul>
        <button className="nav-cta">Get Started</button>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>About Us</NavLink>
        <NavLink to="/faq" onClick={() => setOpen(false)}>FAQ</NavLink>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">PATH<span>BRIDGE</span></div>
      <p className="footer-text">© 2025 PathBridge. All rights reserved.</p>
      <div className="footer-links">
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}