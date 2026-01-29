import React from 'react'
import { FaBriefcase, FaRegIdCard, FaUserGraduate } from 'react-icons/fa'
import { MdBusiness } from 'react-icons/md'



export const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Ramesh Bodke</h1>
        <h3>Software Developer Intern</h3>

        <p>
          I am a passionate Software Developer Intern at ScaleFull Technologies LLP
          and a B.Tech Computer Science Engineering student at Sandip University,
          Nashik. I enjoy building modern, scalable, and user-friendly web
          applications using React and JavaScript.
        </p>

        <div className="hero-buttons">
          <a href="/projects">View My Work</a>
          <a href="./ContactUs" className="outline">Hire Me</a>
        </div>

        <div className="home-highlights">
          <div>
            <p>
              <MdBusiness className='icon'/>
              <h4>Internship</h4>
              <span>ScaleFull Technologies LLP</span>
            </p>
          </div>
          <div>
            <p>
              <FaUserGraduate className='icon'/>
            <h4>Education</h4>
            <span>B.Tech CSE</span>
            </p>
          </div>
          <div>
            <p>
              <FaBriefcase className='icon' />
              <h4>Experience</h4>
              <span>Frontend Development</span>
            </p>
          </div>
        </div>
      </div>

      <div className="home-image">
        <img src="/profile.jpeg" alt="Ramesh Bodke" />
      </div>

    </section>
  )
}

export default Home





