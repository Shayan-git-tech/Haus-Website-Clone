import React from "react";
import Grain from "../assets/images/Grain.png";
import { Lightbulb, HandHeart, TrendingUp } from "lucide-react";
import Card from "./Card";

function Growth() {
  const growthSteps = [
    {
      id: 1,
      title: "MVP",
      icon: <Lightbulb className="w-8 h-8 text-text" />,
      paragraphs: [
        "Design that gets you to market faster and helps you attract investors.",
        "We focus on the core features that prove your idea works while setting you up for growth.",
      ],
    },
    {
      id: 2,
      title: "Seed",
      icon: <HandHeart className="w-8 h-8 text-text" />,
      paragraphs: [
        "Convert more users and lower churn rates.",
        "We help turn your key numbers green and make investors eager to fund your next growth phase.",
      ],
    },
    {
      id: 3,
      title: "Growth",
      icon: <TrendingUp className="w-8 h-8 text-text" />,
      paragraphs: [
        "Add features without breaking what works.",
        "We help you scale smoothly, improve revenue streams, and keep your growing user base happy.",
      ],
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center relative bg-[#101010] overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl px-4 py-10">
        {/* Grain background that only shows behind the text */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={Grain || "/placeholder.svg"}
            alt="Grainy background"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center p-10">
          <h2 className="text-text text-h2 m:text-h2-sm md:text-h2-md lg:text-h2-lg font-urbanist text-center">
            From MVP to unicorn: design that grows with you
          </h2>
          <p className="mt-4 text-p1 sm:text-p1-sm md:text-p1-md text-[#a075c9] font-light font-merriweather italic text-center">
            Solutions for wherever you are in your SaaS journey—and where you're
            going next{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {growthSteps.map((step) => (
            <Card
              key={step.id}
              className="border border-[#222] rounded-lg p-8 flex flex-col relative overflow-hidden"
            >
              <div className="mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-text flex items-center justify-center">
                  {step.icon}
                </div>
              </div>{" "}
              <h4 className="text-text font-urbanist text-h3 sm:text-h3-sm md:text-h3-md font-medium tracking-loose mb-1 relative z-10">
                {step.title}
              </h4>
              <div className="mt-4 space-y-4 flex-grow relative z-10">
                {step.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-secondary text-p3 sm:text-p3-sm md:text-p3-md font-lexend"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Growth;
