"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

/**
 * Hook for implementing smooth scrolling with GSAP
 * @param {Object} options - Configuration options
 * @param {number} options.speed - Smoothness factor (0.5 to 2 is a good range)
 * @param {boolean} options.smooth - Enable/disable smooth scrolling
 * @param {boolean} options.effects - Enable/disable additional scroll effects
 * @returns {Object} - Refs for the wrapper and content elements
 */
function useGsapSmoothScroll({ speed = 0.5, smooth = true, effects = false } = {}) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Only initialize if smooth scrolling is enabled
    if (!smooth || !wrapperRef.current || !contentRef.current) return

    // Create the smooth scroller
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: speed,
      effects: effects,
      normalizeScroll: true,
      ignoreMobileResize: true,
    })

    // Clean up
    return () => {
      if (smoother) {
        smoother.kill()
      }

      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [speed, smooth, effects])

  return { wrapperRef, contentRef }
}

export default useGsapSmoothScroll
