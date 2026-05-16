import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import './contact.scss';

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("formspree.io", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <div className="contact-title-wrapper">
                    <RiMailSendLine className="contact-title-icon" />
                    <h2 className="contact-main-title">Get In Touch</h2>
                </div>

                <div className="contact-grid-layout">
                    <div className="contact-info-cards">
                        <h3 className="info-heading">Let's Connect</h3>
                        <p className="info-text">If you have a job opportunity, a project to discuss, or just want to say hello, feel free to drop a message or connect through social platforms.</p>

                        <div className="cards-stack">
                            <a target="_blank" rel="noreferrer" className="quick-card whatsapp-card">
                                <div className="card-icon"><FaWhatsapp /></div>
                                <div className="card-texts">
                                    <span>WhatsApp</span>
                                    <p>+963 934 302 658</p>
                                </div>
                            </a>

                            <a href="mailto:hjaafar645@gmail.com" className="quick-card">
                                <div className="card-icon"><FaEnvelope /></div>
                                <div className="card-texts">
                                    <span>Email</span>
                                    <p>hjaafar645@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://github.com/hjaafar645-ops" target="_blank" rel="noreferrer" className="quick-card">
                                <div className="card-icon"><FaGithub /></div>
                                <div className="card-texts">
                                    <span>GitHub</span>
                                    <p>hjaafar645-ops</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        {status === "SUCCESS" ? (
                            <div className="form-success-box">
                                <FaCheckCircle className="success-icon" />
                                <h3>Thank You, Jafar Received Your Message!</h3>
                                <p>Your email has been sent successfully. I will get back to you as soon as possible.</p>
                                <button onClick={() => setStatus("")} className="back-btn">Send Another Message</button>
                            </div>
                        ) : (
                            <form className="contact-form-box" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input type="text" name="name" required placeholder=" " />
                                    <label>Your Name</label>
                                </div>
                                <div className="input-group">
                                    <input type="email" name="email" required placeholder=" " />
                                    <label>Your Email</label>
                                </div>
                                <div className="input-group">
                                    <textarea name="message" required rows="5" placeholder=" "></textarea>
                                    <label>Your Message</label>
                                </div>
                                <div className="input-group" style={{ display: 'none' }}>
                                    <input type="text" name="_gotcha" placeholder=" " />
                                </div>
                                <button type="submit" className="form-submit-btn">Send Message</button>
                                {status === "ERROR" && <p className="form-error-msg">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
