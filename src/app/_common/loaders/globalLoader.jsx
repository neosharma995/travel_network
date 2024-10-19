import React from 'react';
import './loader.css';  

function GlobalLoader() {
  return (
    <div className="global-loader">
      <div className="spinner"></div>
      <p className="loading-text">Hang tight, loading awesome stuff...</p>
    </div>
  );
}

export default GlobalLoader;
