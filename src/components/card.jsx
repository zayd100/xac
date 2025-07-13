import React, { useState, useEffect } from 'react';
import '../styles/card.css';

const Card = ({ name, type, price, image, description, features, availability, country }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
        document.body.style.overflow = 'hidden';
    };
    
    const closePopup = () => {
        setShowPopup(false);
        document.body.style.overflow = 'auto';
    };

    // Mouse parallax effect
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    };

    // Create floating particles effect
    useEffect(() => {
        const createParticles = () => {
            const particleCount = 3; // Fewer particles per card
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                document.body.appendChild(particle);
            }
        };

        if (document.querySelectorAll('.particle').length < 50) {
            createParticles();
        }
    }, []);

    return (
        <>
            <div 
                className="card" 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="card-content">
                    <div className="card-image-container">
                        <img src={image} alt={name} className="card-image" />
                        <div className="card-image-overlay"></div>
                    </div>
                    <div className="card-type">{type}</div>
                    <h3 className="card-title">{name}</h3>
                    <p className="card-description">
                        {description || "High-quality premium item with excellent features and design."}
                    </p>
                    <p className='card-description'>Origin: {country}</p>
                    <div className="card-footer">
                        <div className="card-price">{price}$/week</div>
                        <button className="card-button" onClick={openPopup}>
                            <span>View Details</span>
                        </button>
                    </div>
                </div>
                <div className="card-corner"></div>
            </div>

            {/* Premium Popup Modal */}
            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={closePopup}>×</button>
                        
                        <div className="popup-header">
                            <img src={image} alt={name} className="popup-image" />
                            <div className="popup-info">
                                <h2 className="popup-title">{name}</h2>
                                <div className="popup-type">{type}</div>
                                <div className="popup-price">{price}$/week</div>
                            </div>
                        </div>
                        
                        <div className="popup-body">
                            <div className="popup-section">
                                <h3>Description</h3>
                                <p>{description || "High-quality premium item with excellent features and design."}</p>
                            </div>
                            
                            <div className="popup-section">
                                <h3>Features</h3>
                                <ul>
                                    {features ? features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    )) : (
                                        <>
                                            <li>Premium quality materials</li>
                                            <li>Professional design</li>
                                            <li>Excellent durability</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            
                            <div className="popup-section">
                                <h3>Availability</h3>
                                <p className="availability-status">
                                    {availability || "In Stock"}
                                </p>
                            </div>
                            
                            <div className="popup-section">
                                <h3>Country of Origin</h3>
                                <p className='availability-status'>
                                    {country}
                                </p>
                            </div>
                        </div>
                        
                        <div className="popup-footer">
                            <button className="popup-secondary-btn" onClick={closePopup}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;