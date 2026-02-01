import { useState } from "react";
import "./index.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // mobile menu close
  };

  return (
    <header className="header">
      <h1 className="logo" onClick={() => scrollToSection("home")}>
        Suraj
      </h1>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item" onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li className="nav-item" onClick={() => scrollToSection("projects")}>
            Projects
          </li>
          <li className="nav-item" onClick={() => scrollToSection("about")}>
            About
          </li>
          <li className="nav-item" onClick={() => scrollToSection("blog")}>
            Blogs
          </li>
          <li className="nav-item" onClick={() => scrollToSection("contact")}>
            Contact
          </li>
          <li
            className="nav-item hire-btn"
            onClick={() => scrollToSection("contact")}
    
          >
            Hire Me 🚀
          </li>
        </ul>
      </nav>
    </header>
  );
}
