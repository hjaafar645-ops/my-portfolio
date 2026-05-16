import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer className="cyber-footer">
                <div className="footer-container">

                    <div className="footer-copyright">
                        <p>© 2026 <span className="highlight-name">Jafar Hasan</span>. All Rights Reserved.</p>
                    </div>

                    <div className="footer-tagline">
                        <p>Built with Passion & Clean Code</p>
                    </div>

                    <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                        <FaArrowUp />
                    </button>

                </div>
            </footer>
        </>
    );
};

export default Footer;
