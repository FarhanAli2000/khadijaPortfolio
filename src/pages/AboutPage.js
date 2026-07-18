import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import SkillMeter from '../components/SkillMeter';
import { education, leadership, services, skills, tools } from '../data/portfolioData';

function AboutPage() {
  return (
    <AnimatedSection id="about" className="about-section">
      <SectionHeading
        eyebrow="About"
        title="Design with structure, polish, and brand clarity."
        text="Khadija combines digital design study with hands-on branding work across brochures, posters, social media, and identity systems."
      />

      <div className="about-grid">
        <div className="panel panel-dark">
          <h3>What I Create</h3>
          <div className="service-list">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>

        <div className="panel">
          <h3>Software Strength</h3>
          <div className="meter-stack">
            {tools.map((tool) => (
              <SkillMeter key={tool.name} {...tool} />
            ))}
          </div>
        </div>

        <div className="panel">
          <h3>Skills</h3>
          <div className="pill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="panel education-card">
          <h3>Education</h3>
          {education.map((item) => (
            <div key={item.degree}>
              <strong>{item.degree}</strong>
              <span>{item.school}</span>
              <small>
                {item.period} - {item.location}
              </small>
            </div>
          ))}
          <div className="leadership">
            <strong>{leadership.title}</strong>
            <span>{leadership.period}</span>
            <p>{leadership.text}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default AboutPage;
