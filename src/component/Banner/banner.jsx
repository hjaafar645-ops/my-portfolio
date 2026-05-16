import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt } from 'react-icons/fa';
import './banner.scss';

const Banner = () => {
  const marqueeSkills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JAVASCRIPT', icon: <FaJs /> },
    { name: 'REACT.JS', icon: <FaReact /> },
    { name: 'SASS / SCSS', icon: <FaSass /> },
    { name: 'GIT & GITHUB', icon: <FaGitAlt /> }
  ];

  return (
    <div className="marquee-container-fluid">
      <div className="marquee-track">
        <div className="marquee-group">
          {marqueeSkills.map((skill, index) => (
            <div key={`g1-${index}`} className="marquee-item">
              <span className="marquee-icon">{skill.icon}</span>
              <span className="marquee-text">{skill.name}</span>
              <span className="marquee-divider">•</span>
            </div>
          ))}
        </div>
        
        <div className="marquee-group" aria-hidden="true">
          {marqueeSkills.map((skill, index) => (
            <div key={`g2-${index}`} className="marquee-item">
              <span className="marquee-icon">{skill.icon}</span>
              <span className="marquee-text">{skill.name}</span>
              <span className="marquee-divider">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
