import { useState } from 'react';
import "../Navbar/navbar.scss"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar-container">
                        <a href="#home" className="nav-logo" onClick={handleLinkClick}>
                            <div className="logo-circle">
                                <span>J</span>
                            </div>
                            <div className='title-dev'>
                                <ul className='list-dev'>
                                    <li className='dev-name'> Jafar Hasan </li>
                                    <li className='dev-spec'> FRONTEND DEV </li>
                                </ul>
                            </div>
                        </a>

                        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                            <li className="nav-item">
                                <a href="#home" className="nav-links" onClick={handleLinkClick}> Home </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-links" onClick={handleLinkClick}> About </a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className="nav-links" onClick={handleLinkClick}> Projects </a>
                            </li>
                            <li className="nav-item">
                                <a href="#experience" className="nav-links" onClick={handleLinkClick}> Experience </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-links nav-btn" onClick={handleLinkClick}> Hire Me </a>
                            </li>
                        </ul>

                        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                            <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
                            <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
                            <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar