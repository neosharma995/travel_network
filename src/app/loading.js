import React from 'react';
import './globals.css';  

function GlobalLoader() {
  return (
    <div className="global-loaderr">
      <div className="spinner"></div>
      <p className="loading-text">Please wait Loading....</p>
    </div>
  );
}

export default GlobalLoader;
