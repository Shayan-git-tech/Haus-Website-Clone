import React from "react";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import logo from "../assets/Images/Haus-logo.png";
import Grain from "../assets/Images/Grain.png";

function Footer() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "MVP Design", href: "#mvp" },
        { name: "Seed Growth", href: "#seed" },
        { name: "Scale & Optimize", href: "#growth" },
        { name: "Design System", href: "#system" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Method", href: "#method" },
        { name: "Case Studies", href: "#cases" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Design Tips", href: "#tips" },
        { name: "SaaS Metrics", href: "#metrics" },
        { name: "Free Audit", href: "#audit" },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#twitter", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#linkedin", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#github", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "#email", label: "Email" },
  ];

  return (
    <footer className="w-full relative bg-[#0a0a0a] border-t border-[#222] overflow-hidden">
      {/* Grain background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
        <img
          src={Grain}
          alt="Grainy background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start">
                <img 
                  src={logo} 
                  alt="Haus Logo" 
                  className="w-[120px] sm:w-[135px] md:w-[150px] mb-6"
                />
                <p className="text-secondary text-p3 sm:text-p3-sm md:text-p3-md font-lexend text-center lg:text-left max-w-sm">
                  Design that converts, built by founders who understand SaaS metrics and growth.
                </p>
                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-secondary hover:text-text hover:border-accent transition-colors duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-text font-urbanist text-h4 sm:text-h4-sm md:text-h4-md font-medium mb-4 text-center sm:text-left">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-secondary text-p3 sm:text-p3-sm md:text-p3-md font-lexend hover:text-text transition-colors duration-200 block text-center sm:text-left"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#222] py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-secondary text-p3 sm:text-p3-sm font-lexend">
                © 2024 Haus Design Partnership. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href="#privacy" 
                className="text-secondary text-p3 sm:text-p3-sm font-lexend hover:text-text transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-secondary text-p3 sm:text-p3-sm font-lexend hover:text-text transition-colors duration-200"
              >
                Terms of Service
              </a>
              <p className="text-accent text-p3 sm:text-p3-sm font-merriweather italic">
                Design that grows with you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle shadow effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
    </footer>
  );
}

export default Footer;