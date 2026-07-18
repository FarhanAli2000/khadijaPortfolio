function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.featured ? 'is-featured' : ''}`}>
      <a className="project-media" href={project.link} target="_blank" rel="noreferrer">
        <img src={project.image} alt={project.title} loading={index < 2 ? 'eager' : 'lazy'} />
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </a>

      <div className="project-content">
        <div>
          <p>{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="open-mark">Open</span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="tag-row" aria-label={`${project.title} skills`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
