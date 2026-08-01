/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8FAFC",
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#EEF2FF",
        },
        accent: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          light: "#F5F3FF",
        },
        dark: "#0F172A",
        secondary: "#64748B",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'md': '0 4px 14px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'lg': '0 10px 25px -5px rgba(79, 70, 229, 0.16), 0 4px 10px -2px rgba(15, 23, 42, 0.06)',
        'xl': '0 20px 40px -12px rgba(15, 23, 42, 0.14), 0 8px 16px -4px rgba(79, 70, 229, 0.10)',
        '2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05)',
        'card': '0 4px 20px -4px rgba(15, 23, 42, 0.07)',
        'card-hover': '0 24px 48px -12px rgba(79, 70, 229, 0.20)',
        'glow': '0 0 40px -5px rgba(79, 70, 229, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
