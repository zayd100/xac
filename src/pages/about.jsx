import React, { useState } from 'react';
import '../styles/about.css';
import ContactForm from '../components/ContactForm';

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
                            <div className="feature-icon">🪑</div>
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

          <ContactForm/>
        </div>
    );
};

export default About;