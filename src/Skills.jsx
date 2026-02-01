import "./Skills.css";
export default function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Git & GitHub", level: "70%" },
    { name: "Responsive Design", level: "85%" },
  ];

  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="hr"></div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
