import React from 'react'

function Hero() {
return (
    <div className='min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col justify-center items-center text-center relative'>
       
        <p className="text-p2 sm:text-p2-sm md:text-p2-md font-merriweather italic text-accent mb-4 sm:mb-6 md:mb-8">
        On-Demand Design & Dev • Senior Level Designers • One Simple Subscription
        </p>
        <h1 className="text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg font-urbanist text-text mb-4 sm:mb-6 md:mb-6 max-w-4xl">Design that converts, built by founders who get it</h1>
        <p className="text-p1 sm:text-p1-sm md:text-p1-md font-lexend text-text max-w-3xl leading-relaxed">We combine enterprise design expertise with SaaS business experience
        to focus on what matters most - your metrics.</p>
        {/* <Button /> */}
    </div>
)
}

export default Hero
