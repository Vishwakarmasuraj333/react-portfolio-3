import "./Blog.css"
export default function Blog() {
  const blogs = [
    {
      title: "🚀 How I Build Responsive React Apps",
      desc: "My approach to creating fast, responsive and scalable React applications using modern CSS and hooks.",
      date: "Jan 2026",
    },
    {
      title: "🎨 Clean UI Design Principles for Developers",
      desc: "Simple UI/UX rules every frontend developer should follow to make interfaces look professional.",
      date: "Dec 2025",
    },
  ];

  return (
    <section className="blog" id="blog">
      <h2 className="section-title">Blog</h2>
      <div className="hr"></div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <span className="blog-date">{blog.date}</span>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <button className="read-btn">Read More →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
