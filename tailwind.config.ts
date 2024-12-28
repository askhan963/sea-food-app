import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Primary Colors
        primary: {
          DEFAULT: "#0F7EA9", // Deep Sea Blue - Trustworthy and Professional
          light: "#56A3D9",  // Light Blue - Accent for interactive elements
          dark: "#1B4F72",   // Dark Blue - Strong emphasis
        },

        // 🌿 Secondary Colors
        secondary: {
          DEFAULT: "#6FBF73", // Fresh Green - Friendly and Natural
          light: "#A2D9A5",   // Light Green - Calming touch
          dark: "#4B8E4F",    // Dark Green - Stability
        },

        // ⚪ Neutral Colors
        neutral: {
          DEFAULT: "#F8FAFC", // Light Grey - Background for sections
          light: "#FFFFFF",   // Pure White - Clean background
          dark: "#475569",    // Dark Grey - Text and borders
        },

        // 🌟 Background & Foreground
        background: "#F0F4F8", // Light Background for a calming experience
        foreground: "#1E293B", // Dark Foreground for readable text

        // ❤️ Status Colors
        success: "#22C55E", // Success Green
        error: "#EF4444",   // Error Red
        warning: "#F59E0B", // Warning Orange
        info: "#3B82F6",    // Info Blue
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, clean font
      },

      boxShadow: {
        default: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
        strong: "0 8px 15px rgba(0, 0, 0, 0.2)", // Strong shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
