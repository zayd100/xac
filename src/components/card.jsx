import React, { useState } from 'react';
import '../styles/card.css';

const Card = ({ name, type, price, image, description, features, availability }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="card">
                <div className='card-image'>
                    <img src={image} alt={name} />
                </div>
                <h1 className='card-title'>{name}</h1>
                <h2 className='card-type'>{type}</h2>
                <p className='card-price'>{price}$</p>
                
                {/* Details Button */}
                <button className="card-button" onClick={openPopup}>
                    View Details
                </button>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={closePopup}>
                            ×
                        </button>
                        
                        <div className="popup-header">
                            <img src={image} alt={name} className="popup-image" />
                            <div className="popup-info">
                                <h1 className="popup-title">{name}</h1>
                                <h2 className="popup-type">{type}</h2>
                                <p className="popup-price">{price}$</p>
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
                        </div>
                        
                        <div className="popup-footer">
                            <button className="popup-action-btn">
                                Add to Cart
                            </button>
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