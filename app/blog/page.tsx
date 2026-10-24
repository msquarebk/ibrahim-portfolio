type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

const posts: Post[] = [];

export default function Blog() {
  return (
    <section className="section">
      <h1 className="page-title">Blog</h1>
      {posts.length === 0 ? (
        <div className="empty">
          <p>No posts yet. Your first article will appear here.</p>
        </div>
      ) : (
        <ul className="project-list">
          {posts.map((p) => (
            <li key={p.slug}>
              <h2>{p.title}</h2>
              <p className="tech">{p.date}</p>
              <p>{p.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
