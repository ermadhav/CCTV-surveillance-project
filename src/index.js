// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css'; // Import your global styles
import './styles.css'; // Import your custom styles
import App from './App';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);