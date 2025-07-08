import React from "react";
import LightningBg from "../assets/Images/Lightning.png";
import Modal from "../assets/Images/Modal.png";
function Test() {
  return (
    <div className="relative min-h-screen grid place-items-center">
      

      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${LightningBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />
      {/* Orb image */}
      <div className="absolute w-[80%] max-w-[900px] md:w-[60%] lg:w-[90%] aspect-square">
        <img
          src={Modal}
          alt="Purple Orb"
          className="w-full h-full object-contain aspect-square drop-shadow-[0_0_450px_rgba(139,92,246,0.9)]"
        />
      </div>
    </div>
    
  );
}

export default Test;
