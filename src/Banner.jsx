import { useState, useEffect } from "react";
import "./Banner.css";

const texts = [
  "💻 Frontend Developer",
  "⚛️ React Expert",
  "🎨 UI Designer",
  "🚀 Freelancer",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Cursor blink
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section className="banner" id="home">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Hi, I'm Suraj</h1>
          <h2 className="typewriter">
            {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </h2>
          <div className="buttons">
            <button className="btn hire-btn">Hire Me</button>
            <button className="btn portfolio-btn" >Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
}
