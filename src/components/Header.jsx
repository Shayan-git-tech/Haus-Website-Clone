import React from "react";
import bgImg from "../assets/Images/Lighteffect.png";

import logo from "../assets/Images/Haus-logo.png";
function Header() {
  return (
    <div>
      <img
        src={bgImg}
        alt="Background"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
        style={{ width: "100%", height: "auto" }}
      />
      <img src={logo} alt="logo" className="w-[150px] mx-auto py-[50px]" />
    </div>
  );
}

export default Header;
