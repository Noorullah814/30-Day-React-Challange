import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Persistent Theme App</h2>
        <p>Your preference is remembered even after refresh.</p>
        <div className="hero-highlight">
          Built with <strong>useContext</strong> + <strong>localStorage</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;