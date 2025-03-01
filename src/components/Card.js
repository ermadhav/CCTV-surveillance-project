import React from 'react';

const Card = ({ icon, title, description, buttonText }) => (
  <div className="card">
    <div className="flex items-center mb-2">
      <i className={`fas ${icon} text-blue-500 text-2xl`}></i>
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
    <button className="button">{buttonText}</button>
  </div>
);

export default Card;