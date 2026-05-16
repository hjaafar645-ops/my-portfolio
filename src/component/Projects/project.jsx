import React from 'react';
import { RiCodeSSlashLine, RiFolderOpenLine } from 'react-icons/ri';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import "../Projects/project.scss";

function Project() {
    const myProjects = [
        {
            title: 'Advanced Real Estate Hub',
            desc: 'A comprehensive, fully responsive property platform featuring a dynamic and advanced state-filtering system for custom user searches in React.',
            tech: ['React.js', 'JavaScript', 'State Filters', 'UX/UI'],
            liveLink: 'https://darling-mochi-eb2653.netlify.app/',
            githubLink: 'https://github.com/hjaafar645-ops/dream-home-react',
            image: '/Images/home-screen.png'
        },
        {
            title: 'Ultimate Fitness Club',
            desc: 'A complete, multi-page sports and fitness platform designed with clean structural components and fluid interactive user layouts.',
            tech: ['React.js', 'JavaScript', 'SCSS', 'Multi-Pages'],
            liveLink: 'https://chipper-malasada-61bd1a.netlify.app/',
            githubLink: 'https://github.com/hjaafar645-ops/bayern-munich-pro-remake',
            image: '/Images/players-page.png'
        },
        {
            title: 'Electro-Tech Storefront',
            desc: 'A modern e-commerce user interface focusing on dynamic layouts, smooth transition fade effects, and fluid Swiper.js product sliders.',
            tech: ['Css3', 'JavaScript', 'Swiper.js', 'UI'],
            liveLink: 'https://hjaafar645-ops.github.io/modern-ecommerce-ui/',
            githubLink: 'https://github.com/hjaafar645-ops/modern-ecommerce-ui',
            image: '/Images/products-screen.png'
        }
    ];

    return (
        <>
            <main>
                <section id="projects" className="projects-section">
                    <div className="projects-container">

                        <div className="projects-title-wrapper">
                            <RiCodeSSlashLine className="projects-title-icon" />
                            <h2 className="projects-main-title">My Projects</h2>
                        </div>

                        <div className="projects-cards-grid">
                            {myProjects.map((project, index) => (
                                <div key={index} className="cyber-project-card">

                                    <div className="card-media-slot" style={{ position: 'relative', overflow: 'hidden' }}>

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-img"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundSize:'cover',
                                                backgroundPosition:'centre',
                                            }}
                                        />

                                        <div className="media-hover-glass">
                                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="glass-circle-btn">
                                                <FaExternalLinkAlt />
                                            </a>
                                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="glass-circle-btn">
                                                <FaGithub />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-info-details">
                                        <h3 className="card-project-title">{project.title}</h3>
                                        <p className="card-project-desc">{project.desc}</p>

                                        <div className="card-tech-tags">
                                            {project.tech.map((t, idx) => (
                                                <span key={idx} className="single-tech-tag">{t}</span>
                                            ))}
                                        </div>

                                        <div className="card-action-buttons">
                                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="action-link-btn live-demo-btn">
                                                <FaExternalLinkAlt /> Demo
                                            </a>
                                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="action-link-btn source-code-btn">
                                                <FaGithub /> Source
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}

export default Project;
