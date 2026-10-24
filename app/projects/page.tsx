import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section">
      <h1 className="page-title">Projects</h1>
      {projects.length === 0 ? (
        <div className="empty">
          <p>No projects added yet.</p>
        </div>
      ) : (
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.title}>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <p className="tech">{p.tech.join(", ")}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  View project
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
