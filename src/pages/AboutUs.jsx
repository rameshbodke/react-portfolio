import React from 'react'

const AboutUs = () => {
  return (
     <section className="page-about">
      {/* <img src={profile} className="about-img" alt="Ramesh Bodke" /> */}

      <h1>About Me</h1>

      <p>
        I am Ramesh Bodke, a motivated Computer Science Engineering student
        currently pursuing my B.Tech degree from Sandip University, Nashik.
        I have a strong interest in software development and web technologies.
      </p>

      <p>
        I am currently working as a Software Developer Intern at ScaleFull
        Technologies LLP, where I actively contribute to frontend development,
        UI improvements, and real-world React projects.
      </p>

      <h2>Education</h2>
      <ul>
        <li>B.Tech – Computer Science Engineering</li>
        <li>Sandip University, Nashik</li>
      </ul>

      <h2>Technical Skills</h2>
      <ul className="skills">
        <li>Java</li>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Git & GitHub</li>
      </ul>

      <h2>Career Objective</h2>
      <p>
        To start my career as a software developer where I can apply my technical
        knowledge, learn from industry professionals, and contribute to
        meaningful projects.
      </p>
    </section>
  )
}

export default AboutUs