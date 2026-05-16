import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import './About.scss';

const About = () => {
  const skillsList = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
    { name: 'Sass / SCSS', icon: <FaSass />, color: '#cc6699' },
    { name: 'Git & GitHub', icon: <FaGitAlt />, color: '#f05032' },
  ];

  return (
    <>
      <main>
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-info-box">
              <div className="about-title-wrapper">
                <RiCodeSSlashLine className="about-title-icon" />
                <h2 className="about-main-title">About Me</h2>
              </div>
              <p className="about-text-p">
                Hello! I am a passionate frontend developer dedicated to constructing exceptional digital experiences. My journey in web development centers on translating complex layouts into elegant, performant, and maintainable interfaces.
              </p>
              <p className="about-text-p">
                I love exploring new tools and workflows to enhance both code quality and user experience. With a sharp eye for precision and a love for interactive aesthetics, I strive to make the web a more beautiful and functional place.
              </p>
            </div>

            <div className="about-skills-box">
              <h3 className="skills-sub-title">My Tech Stack</h3>
              <div className="skills-cards-grid">
                {skillsList.map((skill, index) => (
                  <div
                    key={index}
                    className="single-skill-card"
                    style={{ '--skill-hover-color': skill.color }}
                  >
                    <div className="skill-card-icon">{skill.icon}</div>
                    <span className="skill-card-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
