import "../Home/home.scss"
function Home() {
    return (
        <>
            <main>
                <section id="home" className="hero-section">
                    <div className="hero-container">
                        <div className="hero-content">
                            <span className="hero-subtitle"> WELCOME TO MY PORTFOLIO </span>
                            <h1 className="hero-title">
                                Hi, I'm <span className="highlight-name"> Jafar Hasan </span>
                                <span className="hero-spec"> Frontend Developer </span>
                            </h1>
                            <p className="hero-description">
                                I craft modern, responsive, and highly interactive user interfaces.
                                Bringing pixel-perfect designs to life with clean code and cutting-edge web technologies.
                            </p>
                            <div className="hero-buttons">
                                <a href="#projects" className="btn-primary"> View My Work </a>
                                <a href="#contact" className="btn-secondary"> Let's Talk </a>
                            </div>
                        </div>

                        <div className="hero-image-wrapper">
                            <div className="hero-image-card">
                                <img src="/Images/logo.jpg" alt="Jafar Hasan" className="hero-img" />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Home