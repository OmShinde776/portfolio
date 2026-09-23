function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <p className="section-number">03 / EXPERTISE</p>

      <div className="section-content">
        <h2>Skills & Technologies</h2>

        <div className="skills-list">

          <div className="skill-category">
            <span className="skill-label">FRONTEND</span>

            <div className="skill-items">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>
          </div>

          <div className="skill-category">
            <span className="skill-label">BACKEND</span>

            <div className="skill-items">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="skill-category">
            <span className="skill-label">TOOLS</span>

            <div className="skill-items">
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;