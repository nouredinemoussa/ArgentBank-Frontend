import React from 'react';
import './FeatureItem.css';

const FeatureItem = ({ imageSrc, imageAlt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={imageSrc} alt={imageAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
