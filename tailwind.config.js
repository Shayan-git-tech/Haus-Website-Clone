// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffefd5",
        secondary: "#949494",
        accent: "#a075c9",
        primary: "#fff0d5",
        lGray: "#bcbdbf",
        black: "#000000",
      },
      fontSize: {
        h1: ["40px", { lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }],
        "h1-sm": ["48px"],
        "h1-md": ["64px"],
        "h1-lg": ["72px"],
        h2: ['32px', { fontWeight: '400', lineHeight: '1.2' }],
        'h2-sm': ['42px', { lineHeight: '1.2' }],
        'h2-md': ['56px', { lineHeight: '1.2' }],
        'h2-lg': ['78px', { lineHeight: '1.2' }],

        h3: ['24px', { fontWeight: '400', lineHeight: '1.2' }],
        'h3-sm': ['32px', { lineHeight: '1.2' }],
        'h3-md': ['40px', { lineHeight: '1.2' }],
        'h3-lg': ['48px', { lineHeight: '1.2' }],

        h4: ['20px', { fontWeight: '400', lineHeight: '1.3' }],
        'h4-sm': ['22px', { lineHeight: '1.3' }],
        'h4-md': ['24px', { lineHeight: '1.3' }],
        'h4-lg': ['26px', { lineHeight: '1.3' }],

        p1: ['18px', { fontWeight: '500' }],
        'p1-sm': ['16px', { fontWeight: '500' }],
        'p1-md': ['20px', { fontWeight: '500' }],

        p2: ['16px', { fontStyle: 'italic', fontWeight: '400' }],
        'p2-sm': ['15px', { fontStyle: 'italic', fontWeight: '400' }],
        'p2-md': ['17px', { fontStyle: 'italic', fontWeight: '400' }],

        p3: ['15px', { fontWeight: '400' }],
        'p3-sm': ['14px', { fontWeight: '400' }],
        'p3-md': ['16px', { fontWeight: '400' }],
      },

      borderRadius: {
        btn: "30px",
      },
      fontFamily: {
        sans: ['"Urbanist"', ...fontFamily.sans],
        urbanist: ['"Urbanist"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        lexend: ['"Lexend"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        merriweather: ['"Merriweather"', 'Georgia', '"Times New Roman"', 'Times', 'serif'],
      },
      boxShadow: {
        'purple': '0 0 60px 20px rgba(160, 117, 201, 0.3)',
        'purple-lg': '0 0 0px 3px rgba(160, 117, 201, 0.4)',
        'purple-sm': '0 0 40px 10px rgba(160, 117, 201, 0.2)',
        'purple-circle': '0 0 120px 120px rgba(160, 117, 201, 0.2)', // Circular shadow
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
