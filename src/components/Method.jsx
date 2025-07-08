import Grain from "../assets/images/Grain.png";
import { Target, FileText, LayoutGrid, LineChart } from "lucide-react";
import Card from "./Card.jsx"
function Method() {
  const methodSteps = [
    {
      id: "01",
      title: "Strategic Discovery",
      icon: <Target className="w-8 h-8 text-[#f5f0e1]" />,
      paragraphs: [
        "We find out what numbers matter to your business first.",
        "Most design agencies worry too much about looks—we care about what helps your business grow.",
        "We learn your key SaaS numbers on day one, so we can create designs that boost your profits, not just look pretty.",
      ],
    },
    {
      id: "02",
      title: "Conversion Architecture",
      icon: <FileText className="w-8 h-8 text-[#f5f0e1]" />,
      paragraphs: [
        "We design easy paths that guide users right where you want them.",
        "No random design choices, only solutions that help convert visitors to customers.",
        "We create smooth user flows that show your value clearly and turn curious visitors into paying customers.",
      ],
    },
    {
      id: "03",
      title: "Pixel-Perfect Execution",
      icon: <LayoutGrid className="w-8 h-8 text-[#f5f0e1]" />,
      paragraphs: [
        "With years of experience, we create designs that developers love to work with.",
        "You'll get results in days, not months, keeping your momentum going strong.",
        "Our files are set up for easy handoff to your team, helping you launch faster and save money.",
      ],
    },
    {
      id: "04",
      title: "Measure & Optimise",
      icon: <LineChart className="w-8 h-8 text-[#f5f0e1]" />,
      paragraphs: [
        "We help track how well things work and make them better using real data.",
        "We don't just deliver and vanish—we stick with you as long as you want our help.",
        "Your conversion rates keep getting better, putting more money in your pocket with each update.",
      ],
    },
  ];
  return (
    <section className="container flex flex-col items-center justify-center min-h-screen relative bg-[#0a0a0a] overflow-hidden py-12 md:py-10 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Grain background that only shows behind the text */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={Grain || "/placeholder.svg"}
            alt="Grainy background"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-10">
          <h2 className="text-text text-h2 m:text-h2-sm md:text-h2-md lg:text-h2-lg font-urbanist text-center">
            The Haus method®
          </h2>
          <p className="mt-4 text-p1 sm:text-p1-sm md:text-p1-md text-[#a075c9] font-light font-merriweather italic text-center">
            Our proven process for turning visitors into customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodSteps.map((step) => (
            <Card
              key={step.id}
              className="border border-[#222] rounded-lg p-6 flex flex-col relative overflow-hidden"
            >
             

              <div className="mb-6 relative z-10">{step.icon}</div>
              <h4 className="text-text font-urbanist text-h4 sm:text-h4-sm md:text-h4-md font-medium tracking-loose mb-1 relative z-10">
                {step.id}: {step.title}
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

export default Method;
