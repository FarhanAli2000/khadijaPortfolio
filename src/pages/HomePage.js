import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { profile, stats } from '../data/portfolioData';

function HomePage() {
  const [typedName, setTypedName] = useState('');
  const [activePortrait, setActivePortrait] = useState(0);

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedName(profile.name.slice(0, index));

      if (index >= profile.name.length) {
        window.clearInterval(timer);
      }
    }, 115);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePortrait((current) => (current + 1) % profile.portraits.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <AnimatedSection id="home" className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Graphic Designer - Branding & Marketing</span>
        <h1 className="typewriter-title" aria-label={profile.name}>
          {typedName}
          <span className="typewriter-cursor" aria-hidden="true">
            |
          </span>
        </h1>
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
        <div className="portrait-slider">
          {profile.portraits.map((portrait, index) => (
            <img
              key={portrait}
              className={`hero-portrait ${activePortrait === index ? 'is-active' : ''}`}
              src={portrait}
              alt={index === 0 ? 'Khadija Sajid profile portrait' : 'Khadija Sajid alternate portrait'}
            />
          ))}
        </div>
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
