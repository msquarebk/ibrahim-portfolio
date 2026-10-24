import Link from "next/link";
import { projects } from "./data/projects";

const skills = [
  { name: "React", note: "Component-driven interfaces" },
  { name: "TypeScript", note: "Typed code from database to UI" },
  { name: "Next.js", note: "Routing, rendering, and API routes" },
  { name: "Node.js", note: "Backend services and APIs" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <img
            src="https://github.com/Msquarebk.png"
            alt="Portrait of Ibrahim Mansur"
            width={120}
            height={120}
            className="portrait"
          />
          <h1>Ibrahim Mansur</h1>
          <p className="lead">
            Fullstack developer building web apps with React and TypeScript at
            Ibn Rabia Softwares Inc.
          </p>
          <div className="actions">
            <Link href="/projects" className="btn btn-primary">
              View projects
            </Link>
            <Link href="/contact" className="btn">
              Get in touch
            </Link>
          </div>
        </div>

        <pre className="hero-code" aria-label="Summary of Ibrahim Mansur">
          <code>
            <span className="c-kw">const</span> ibrahim
            <span className="c-pun">: </span>
            <span className="c-type">Developer</span>
            <span className="c-pun"> = {"{"}</span>
            {"\n  "}role<span className="c-pun">: </span>
            <span className="c-str">&quot;Fullstack&quot;</span>
            <span className="c-pun">,</span>
            {"\n  "}frontend<span className="c-pun">: [</span>
            <span className="c-str">&quot;React&quot;</span>
            <span className="c-pun">, </span>
            <span className="c-str">&quot;TypeScript&quot;</span>
            <span className="c-pun">],</span>
            {"\n  "}backend<span className="c-pun">: </span>
            <span className="c-str">&quot;Node.js&quot;</span>
            <span className="c-pun">,</span>
            {"\n  "}company<span className="c-pun">: </span>
            <span className="c-str">&quot;Ibn Rabia Softwares Inc.&quot;</span>
            <span className="c-pun">,</span>
            {"\n  "}available<span className="c-pun">: </span>
            <span className="c-kw">true</span>
            <span className="c-pun">,</span>
            {"\n"}
            <span className="c-pun">{"}"};</span>
          </code>
        </pre>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          {skills.map((s) => (
            <li key={s.name}>
              <strong>{s.name}</strong>
              <span>{s.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Featured projects</h2>
        {projects.length === 0 ? (
          <div className="empty">
            <p>No projects added yet.</p>
          </div>
        ) : (
          <ul className="project-list">
            {projects.slice(0, 3).map((p) => (
              <li key={p.title}>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <p className="tech">{p.tech.join(", ")}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
