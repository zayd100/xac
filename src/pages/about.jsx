import React, { useState } from 'react';
import '../styles/about.css';

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', phone: '', query: '' });
        } catch (error) {
            setSubmitMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="about-container">
            <div className="about-content">
                <section className="about-hero">
                    <h1 className="about-title">About Us</h1>
                    <p className="about-subtitle">
                        FuriFlex is your go-to platform for innovative furniture solutions,
                        offering a seamless blend of style, comfort, and convenience.
                    </p>
                </section>

              

           

                <section className="about-team">
                    <h2>Why Choose Us?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h4>Fast & Efficient</h4>
                            <p>We Deliver Your Furniture within 72 hours</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🎯</div>
                            <h4>Luxury-Feel</h4>
                            <p>Designed to feel luxurious, priced to be accessible.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🔧</div>
                            <h4>Best Price</h4>
                            <p>Unbeatable prices for all your furniture needs</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💬</div>
                            <h4>24/7 Support</h4>
                            <p>Always here when you need us</p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="contact-section">
                <div className="contact-content">
                    <h2>Get In Touch</h2>
                    <p>Ready to start your next project? We'd love to hear from you.</p>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="query">Your Message</label>
                            <textarea
                                id="query"
                                name="query"
                                value={formData.query}
                                onChange={handleInputChange}
                                required
                                placeholder="Tell us about your project or question..."
                                rows="5"
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {submitMessage && (
                            <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default About;