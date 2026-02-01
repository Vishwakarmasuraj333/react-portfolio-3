import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Some of my recent work showcasing frontend expertise.
        </p>
        <div className="hr"></div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img
              src="https://th.bing.com/th/id/OIP.gP9a5qLjhmRPYcQdcWBZWAHaF5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Project"
            />
            <div className="project-content">
              <h3>Admin Dashboard</h3>
              <p>
                Responsive dashboard built using React with modern UI and
                reusable components.
              </p>
              <div className="project-links">
                <button>Live Demo</button>
                <button className="outline">GitHub</button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/355097239/original/c3901a5a8e6f8ad66da503565b74b9fc8e2ae346/create-a-personal-portfolio-or-business-portfolio-website-5118.png"
              alt="Project"
            />
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                Personal portfolio website with animations, responsive layout
                and clean UX.
              </p>
              <div className="project-links">
                <button>Live Demo</button>
                <button className="outline">GitHub</button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/267/266/original/vector-landing-page-website-template-with-abstract-low-poly-design.jpg"
              alt="Project"
            />
            <div className="project-content">
              <h3>Startup Landing Page</h3>
              <p>
                High-conversion landing page built with performance and SEO in
                mind.
              </p>
              <div className="project-links">
                <button>Live Demo</button>
                <button className="outline">GitHub</button>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="project-card">
            <img src="https://static.vecteezy.com/system/resources/previews/019/487/290/original/e-commerce-landing-page-design-free-vector.jpg" />
            <div className="project-content">
              <h3>E-commerce UI</h3>
              <p>Modern shopping UI with product listing and cart layout.</p>
              <div className="project-links">
                <button>Live Demo</button>
                <button className="outline">GitHub</button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="project-card">
            <img src="https://tse4.mm.bing.net/th/id/OIP.9mGIAqx10v0vdgGVVcWyOQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3" />
            <div className="project-content">
              <h3>React Components Library</h3>
              <p>Reusable UI components built for scalable applications.</p>
              <div className="project-links">
                <button>Live Demo</button>
                <button className="outline">GitHub</button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="project-card">
            <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f08346568225a7d9951_6002086f72b72701db01e57d_asana-rebel.jpeg" />
            <div className="project-content">
              <h3>Mobile App Landing</h3>
              <p>Responsive landing page designed for mobile applications.</p>
              <div className="project-links">
                <button>Live Demo</button>
                <button className="outline">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
