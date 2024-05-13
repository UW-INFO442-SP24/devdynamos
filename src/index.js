import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'
import './index.css';
import App from './App';


// Create a root using createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



