import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';

function ExperiencePage() {
  return (
    <AnimatedSection id="experience" className="experience-section">
      <SectionHeading
        eyebrow="Experience"
        title="Practical design work across brand systems and marketing content."
      />

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.title}`}>
            <div className="timeline-marker" />
            <div className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
                <span>
                  {item.period} - {item.location}
                </span>
              </div>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default ExperiencePage;
