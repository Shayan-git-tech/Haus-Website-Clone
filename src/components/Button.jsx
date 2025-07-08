"use client"

import React from "react"
export default function Button({
    avatar = '',
    buttonBgColor = "bg-text",
    buttonTextColor = "text-black",
    buttonHoverBgColor = "hover:bg-[#000000]",
    buttonHoverTextColor = "hover:text-lGray",
    buttonhoverBorderColor = "hover:border-[#f5f0e1]",
    className = "",
    children,
    onClick,
    type = "button",
    disabled = false,
}) {
    // Combine the classes
    const buttonClasses = `
        rounded-full ${buttonBgColor} ${buttonTextColor} ${buttonHoverBgColor} 
        ${buttonHoverTextColor} ${buttonhoverBorderColor} border-2 border-transparent
        px-3 py-2 h-auto text-p3 sm:text-p3-sm md:text-p3-md font-semibold font-lexend flex items-center gap-3
        transition-colors duration-200 ease-in-out
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className} mx-auto
    `

    return (
        <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
            <div className={`relative w-8 h-8 rounded-full overflow-hidden `}>
                <div className={`absolute inset-0 flex items-center justify-center text-xs`}>
                    <img
                        src={avatar}
                        alt="Avatar"
                        className={`w-full h-full object-cover rounded-full`}
                    />
                </div>
            </div>
            {children}
        </button>
    )
}
