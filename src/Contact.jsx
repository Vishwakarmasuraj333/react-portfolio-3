import "./index.css"
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="hr"></div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send Message ✉️</button>
      </form>
    </section>
  );
}
