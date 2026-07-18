import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolioData';

function ProjectsPage() {
  return (
    <AnimatedSection id="projects" className="projects-section">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected projects from branding, print, and digital campaigns."
        text="Each card opens the original public file, with PDF thumbnails generated from the supplied project assets."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default ProjectsPage;
