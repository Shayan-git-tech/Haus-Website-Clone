import useGsapSmoothScroll from "./hooks/useGsapSmoothScroll"

/**
 * Component that provides smooth scrolling to its children
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {number} props.speed - Smoothness factor (0.5 to 2 is a good range)
 * @param {boolean} props.smooth - Enable/disable smooth scrolling
 * @param {boolean} props.effects - Enable/disable additional scroll effects
 */
function SmoothScrollProvider({ children, speed = 0.5, smooth = true, effects = false }) {
  const { wrapperRef, contentRef } = useGsapSmoothScroll({ speed, smooth, effects })

  return (
    <div ref={wrapperRef} className="smooth-wrapper">
      <div ref={contentRef} className="smooth-content">
        {children}
      </div>
    </div>
  )
}

export default SmoothScrollProvider
