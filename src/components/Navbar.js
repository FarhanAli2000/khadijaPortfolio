import { useState } from 'react';
import { profile } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`} aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Khadija Sajid portfolio home" onClick={closeMenu}>
        <img src={profile.logo} alt="" />
        <span>Khadija</span>
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="mobile-cv-link" href={profile.cv} target="_blank" rel="noreferrer" onClick={closeMenu}>
          View CV
        </a>
      </div>

      <a className="nav-cta" href={profile.cv} target="_blank" rel="noreferrer">
        View CV
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
