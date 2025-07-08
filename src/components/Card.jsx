// Card.jsx
import React from 'react';
import Grain from "../assets/Images/Grain.png";

function Card({ className = "", children }) {
  return (
    <div className={`${className} relative overflow-hidden smooth`}>
      {/* Responsive grain background */}
      <div className="grain-bg absolute inset-0 z-0 pointer-events-none">
        <img
          src={Grain || "/placeholder.svg"}
          alt="Grainy Background"
          className="object-contain w-full h-full opacity-80"
        />
      </div>

      {/* Shadow */}
      <div className="shadow-container absolute inset-0 z-0 pointer-events-none">
        <div className="shadow-purple-circle opacity-60 w-full h-full" />
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default Card;
