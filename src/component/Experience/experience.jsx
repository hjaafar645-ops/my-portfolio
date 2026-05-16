import React from 'react';
import { RiBriefcaseLine, RiGraduationCapLine, RiHistoryLine } from 'react-icons/ri';
import './experience.scss';

const Experience = () => {
    const timelineData = [
        {
            icon: <RiBriefcaseLine />,
            title: 'Freelance Frontend Developer',
            subtitle: 'Independent Projects',
            date: '2025 - PRESENT',
            desc: 'Developing pixel-perfect, responsive user interfaces. Successfully engineered comprehensive web platforms featuring multi-page routing architectures, fluid animations, and advanced Swiper.js layout slider implementations.'
        },
        {
            icon: <RiGraduationCapLine />,
            title: 'Advanced Logic & Component Architecture',
            subtitle: 'Self-Paced Practical Training',
            date: '2025 - 2026',
            desc: 'Focused on advanced React.js and JavaScript logic building. Mastered dynamic array manipulation, state management systems, and implemented sophisticated custom state-filtering algorithms for real estate and sports applications.'
        },
        {
            icon: <RiGraduationCapLine />,
            title: 'Frontend Web Development Certification',
            subtitle: 'ACPS Institute - Damascus',
            date: '2026',
            desc: 'Successfully completed intensive practical training in Frontend Web Development. Covered core web standards, semantics, modern layout structures, and cross-browser responsiveness layouts.'
        }
    ];

    return (
        <>
            <main>
                <section id="experience" className="experience-section">
                    <div className="experience-container">
                        <div className="exp-title-wrapper">
                            <RiHistoryLine className="exp-title-icon" />
                            <h2 className="exp-main-title">My Journey</h2>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-axis-line"></div>

                            {timelineData.map((item, index) => (
                                <div key={index} className="timeline-item">

                                    <div className="timeline-dot-icon">
                                        {item.icon}
                                    </div>

                                    <div className="timeline-glass-card">
                                        <span className="card-date">{item.date}</span>
                                        <h3 className="card-job-title">{item.title}</h3>
                                        <h4 className="card-company-sub">{item.subtitle}</h4>
                                        <p className="card-job-desc">{item.desc}</p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
};

export default Experience;
