import React, { useState } from 'react';
import '../styles/card.css';

const Card = ({ name, type, price, image, description, features, availability, country }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="card-image-container">
                        <img src={image} alt={name} className="card-image" />
                        <div className="card-image-overlay"></div>
                    </div>
                    <h3 className="card-title">{name}</h3>
                    <div className="card-type">{type}</div>
                    <p className="card-description">
                        {description || "High-quality premium item with excellent features and design."}
                    </p>
                    <p className='card-description'>Origin: {country}</p>
                    <div className="card-footer">
                        <div className="card-price">{price}$/week</div>
                        <button className="card-button" onClick={openPopup}>
                            View Details
                        </button>
                    </div>
                </div>
                <div className="card-corner"></div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={closePopup}>×</button>
                        
                        <div className="popup-header">
                            <img src={image} alt={name} className="popup-image" />
                            <div className="popup-info">
                                <h1 className="popup-title">{name}</h1>
                                <h2 className="popup-type">{type}</h2>
                                <p className="popup-price">{price}$/week</p>
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
                                <h3>Country of origin</h3>
                                <p className='availability-status'>
                                    {country}
                                </p>
                            
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