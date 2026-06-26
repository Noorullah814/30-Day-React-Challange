import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🔄",
      title: "Persistent Theme",
      desc: "Your choice stays saved even after closing the browser."
    },
    {
      icon: "🌗",
      title: "Smooth Transition",
      desc: "Beautiful animated transition between light and dark modes."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      desc: "Looks stunning on mobile, tablet, and desktop."
    }
  ];

  return (
    <section className="features">
      <h2>Why This App?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;