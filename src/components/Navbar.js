import { profile } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Khadija Sajid portfolio home">
        <img src={profile.logo} alt="" />
        <span>Khadija</span>
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <a className="nav-cta" href={profile.cv} target="_blank" rel="noreferrer">
        View CV
      </a>
    </nav>
  );
}

export default Navbar;
