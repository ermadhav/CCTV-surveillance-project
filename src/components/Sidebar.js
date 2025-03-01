import React from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <div className="icon">
      <i className="fas fa-th text-white"></i>
    </div>
    <div className="icon icon-gray">
      <i className="fas fa-clipboard-list text-gray-500"></i>
    </div>
    <div className="icon icon-gray">
      <i className="fas fa-bell text-gray-500"></i>
    </div>
    <div className="icon icon-gray">
      <i className="fas fa-map-marker-alt text-gray-500"></i>
    </div>
    <div className="icon icon-gray">
      <i className="fas fa-chart-bar text-gray-500"></i>
    </div>
    <div className="icon" style={{ marginTop: 'auto' }}>
      <i className="fas fa-plus text-white"></i>
    </div>
    <div className="icon icon-gray">
      <img src="https://placehold.co/40x40" alt="User  profile" className="rounded-full" />
    </div>
  </div>
);

export default Sidebar;