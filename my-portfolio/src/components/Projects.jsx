function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <p className="section-number">04 / PROJECTS</p>

      <div className="section-content">
        <h2>Selected Projects</h2>

        <div className="projects-list">

          <div className="project-item">
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-arrow">↗</span>
            </div>

            <h3>Weather App</h3>

            <p>
              A clean weather application that displays
              weather information for different cities.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>


          <div className="project-item">
            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-arrow">↗</span>
            </div>

            <h3>Village Information Project</h3>

            <p>
              A backend project for managing and providing
              village information through an API.
            </p>

            <div className="project-tech">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>PostgreSQL</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;