import AnimatedSection from '../components/AnimatedSection';
import { profile, stats } from '../data/portfolioData';

function HomePage() {
  return (
    <AnimatedSection id="home" className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Graphic Designer - Branding & Marketing</span>
        <h1>{profile.name}</h1>
        <p>{profile.intro}</p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            Explore Work
          </a>
          <a className="secondary-button" href={profile.cv} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Designer portrait and selected stats">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <img className="hero-portrait" src={profile.portrait} alt="Khadija Sajid portrait artwork" />
        <div className="floating-card card-top">
          <span>Current focus</span>
          <strong>Brand identity</strong>
        </div>
        <div className="floating-card card-bottom">
          <span>Based in</span>
          <strong>{profile.location}</strong>
        </div>
      </div>

      <div className="stat-strip">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default HomePage;
