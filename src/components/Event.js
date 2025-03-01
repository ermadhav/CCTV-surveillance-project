// src/Event.js
import React from 'react';

const Event = ({ icon, title, description }) => (
  <div className="event">
    <i className={`fas ${icon} text-blue-500 text-2xl`}></i>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Event;