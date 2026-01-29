import React from "react";


const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-container">

        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          Some of the projects I have worked on using React, JavaScript, and web technologies
        </p>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              {/* <img src="/project1.png" alt="Portfolio Website" /> */}
            </div>

            <div className="project-content">
              <h2>Personal Portfolio Website</h2>
              <p>
                A modern and responsive personal portfolio website built using
                React. It showcases my skills, projects, and contact details in
                a professional manner.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              {/* <img src="/project2.png" alt="CRUD Application" /> */}
            </div>

            <div className="project-content">
              <h2>CRUD Web Application</h2>
              <p>
                A full-featured CRUD application that allows users to create,
                read, update, and delete data. Designed with a clean UI and
                smooth user experience.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/rameshbodke/Curd-Operations.git" target="_blank" rel="noreferrer">GitHub</a>
                
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              {/* <img src="/project3.png" alt="React Counter App" /> */}
            </div>

            <div className="project-content">
              <h2>React Counter App</h2>
              <p>
                A simple React application demonstrating state management using
                hooks. Includes increment, decrement, and reset functionality.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>Hooks</span>
                <span>CSS</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/rameshbodke/CounterApp.git" target="_blank" rel="noreferrer">GitHub</a>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
