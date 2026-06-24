import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const cardData = [
    {
      id: 1,
      title: "Fast Performance",
      description: "Optimized for speed and smooth user experience across all devices.",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Modern Design",
      description: "Clean, beautiful UI with excellent dark and light mode support.",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Secure & Reliable",
      description: "Built with best practices to ensure data security and stability.",
      icon: "🔒"
    },
    {
      id: 4,
      title: "Fully Responsive",
      description: "Looks great on mobile, tablet, and desktop screens.",
      icon: "📱"
    }
  ];

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      
      <div className="cards-container">
        {cardData.map((card) => (
          <Card 
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;