import { useEffect, useState } from "react";
import surajImg from "./assets/suraj.jpeg";
import "./index.css"
export default function About() {
  const texts = [
    "🌐 Web Developer",
    "⚛️ React Developer",
    "🎨 UI Designer",
    "🚀 Frontend Engineer",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 800);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-img">
     <img src={surajImg} alt="Suraj Vishwakarma" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <div className="hr"></div>

          <h3>
            I'm <span>Suraj Vishwakarma</span>
          </h3>

          <h4 className="typewriter">
            {`${texts[index].substring(0, subIndex)}${blink ? "|" : ""}`}
          </h4>

          <p>
            I’m a passionate frontend developer focused on building clean,
            responsive and modern web applications using React and modern CSS.
            I love turning ideas into real-world digital experiences.
          </p>

          {/* Socials */}
          <div className="about-socials">
            <a href="https://github.com/" target="_blank">🐙 GitHub</a>
            <a href="https://linkedin.com/" target="_blank">💼 LinkedIn</a>
            <a href="https://instagram.com/" target="_blank">📸 Instagram</a>
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <button
              className="btn hire-btn"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Hire Me 🚀
            </button>

            <button
              className="btn resume-btn"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              Resume 📄
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
