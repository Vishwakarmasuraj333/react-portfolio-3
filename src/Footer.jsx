import "./index.css"
export default function Footer() {
  return (
    <footer className="footer">
      <h3>Suraj</h3>
      <p>Frontend Developer passionate about building clean & modern web experiences.</p>

      <div className="socials">
        <a href="https:github.com/Vishwakarmasuraj333">🐙 GitHub</a>
        <a href="#">💼 LinkedIn</a>
        <a href="https://www.instagram.com/surajvishwakarma_bittu?igsh=NXlyNHBrbjNvbGJ0&utm_source=ig_contact_invite">📸 Instagram</a>
        <a href="#">🐦 Twitter</a>
      </div>

      <span className="copy">
        © {new Date().getFullYear()} Suraj. All rights reserved.
      </span>
    </footer>
  );
}
