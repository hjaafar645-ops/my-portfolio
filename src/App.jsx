import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar/navbar';
import Home from './component/Home/home';
import About from './component/About/about';
import Banner from './component/Banner/banner'
import Project from './component/Projects/project';
import Experience from './component/Experience/experience'
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';
import "./index.scss";

function App() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div className="background-wrapper">
                <div className="particles">
                    {[...Array(30)].map((_, i) => (
                        <span
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDuration: `${Math.random() * 10 + 5}s`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        ></span>
                    ))}
                </div>

                <div className='light x1'></div>
                <div className='light x2'></div>
                <div className='light x3'></div>
                <div className='light x4'></div>
                <div className='light x5'></div>
                <div className='light x6'></div>
                <div className='light x7'></div>
                <div className='light x8'></div>
                <div className='light x9'></div>

                <div className="traveling-dot" style={{ left: '10%' }}></div>
                <div className="traveling-dot" style={{ left: '50%', animationDelay: '2s' }}></div>
                <div className="traveling-dot" style={{ left: '60%', animationDelay: '3s' }}></div>
                <div className="traveling-dot" style={{ left: '70%', animationDelay: '4s' }}></div>
                <div className="traveling-dot" style={{ right: '80%', animationDelay: '5s' }}></div>
            </div>

            <div
                className="mouse-glow"
                style={{
                    left: mousePos.x - 50,
                    top: mousePos.y - 50,
                }}
            />
            <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"></link>
            <Navbar />
            <Home />
            <About />
            <Banner />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
