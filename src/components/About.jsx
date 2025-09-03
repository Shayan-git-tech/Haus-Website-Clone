// src/components/About.tsx
import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  return (
    <ScrollReveal
      baseOpacity={0.1}
      enableBlur={true}
      baseRotation={5}
      blurStrength={5}
      containerClassName="max-w-5xl mx-auto my-12 md:my-16 lg:my-20 xl:my-24 px-4 py-12 md:py-16 lg:py-20"
    >
      {`We're Marc and Jacob from Haus—a design partnership combining 35+ years of
experience building successful products and elevating brands for
Fortune-500 companies.

While Haus is new, our expertise isn't. And now we're bringing those proven results directly to select SaaS founders who want design that drives measurable growth.`}
    </ScrollReveal>
  );
}

export default About;

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 14,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/\n\n+/).map((paragraph, i) => (
      <p
        key={i}
        className={`text-[clamp(1.6rem,4vw,4rem)] tracking-tight text-center leading-[1.2] text-text font-urbanist mb-10 ${textClassName}`}
      >
        {paragraph.split(/(\s+)/).map((word, index) => {
          if (word.match(/^\s+$/)) return word;
          return (
            <span className="inline-block word" key={index}>
              {word}
            </span>
          );
        })}
      </p>
    ));
  }, [children, textClassName]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "power2.out",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll(".word");

    if (wordElements.length > 0) {
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      {splitText}
    </div>
  );
};
