import AnimatedSection from '../components/AnimatedSection';
import { profile } from '../data/portfolioData';

function ContactPage() {
  return (
    <AnimatedSection id="contact" className="contact-section">
      <div className="contact-copy">
        <span className="eyebrow">Contact</span>
        <h2>Ready for brand visuals, social content, and polished print design.</h2>
      </div>

      <div className="contact-actions">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          {profile.linkedin}
        </a>
      </div>
    </AnimatedSection>
  );
}

export default ContactPage;
