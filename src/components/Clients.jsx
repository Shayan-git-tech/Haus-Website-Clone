import React from "react";
import Adobe from "../assets/Images/Adobe.png";
import Cabana from "../assets/Images/Cabana.png";
import Cisco from "../assets/Images/Cisco.png";
import Pallisto from "../assets/Images/Pallisto.png";
import Paramount from "../assets/Images/Paramount.png";
import CreditOne from "../assets/Images/CreditOne.png";
import Sentry from "../assets/Images/Sentry.png";
import ClientBg from "../assets/Images/Grain.png";

function Clients() {
  const images = [
    Adobe,
    Cabana,
    Cisco,
    Pallisto,
    Paramount,
    CreditOne,
    Sentry,
    Adobe,
    Cabana,
    Cisco,
    Pallisto,
    Paramount,
    CreditOne,
    Sentry,
  ];

  return (
    <div className="w-full my-12 md:my-16 lg:my-20 xl:my-24">
      {/* Text with grainy background */}
      <div className="relative w-full mb-12 flex justify-center">
        <div className="relative z-10 px-4">
          <h2 className="text-lGray text-p1 sm:text-p1-sm md:text-p1-md font-merriweather text-center">
            Our design expertise at work with:
          </h2>
        </div>
        {/* Grain background that only shows behind the text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none">
          <img
            src={ClientBg}
            alt="Grainy background"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Left shadow/gradient */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>

        {/* Right shadow/gradient */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
        {/* Slider */}
        <div className="slider">
          <div className="slide-track flex items-center">
            {images.map((image, index) => (
              <div key={index} className="slide flex-shrink-0 mx-12">
                <img
                  src={image}
                  alt={image.name}
                  width={120}
                  height={40}
                  className="h-25 w-25 object-contain filter contrast-0 invert opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

