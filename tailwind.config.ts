import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Exclude old comps directory
    "!./src/comps/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF0ED',
          light: '#FCF6F3',
        },
        indigo: {
          50: '#EFEDFB',
          100: '#E5E0F6',
          200: '#D0C8EE',
          300: '#A3A3EA',
          400: '#8B7BE0',
          500: '#7363F9',
          600: '#583ACB',
          700: '#5134B5',
          800: '#4539B5',
          900: '#3A2E8A',
          950: '#241B55',
        },
        violet: {
          DEFAULT: '#7363F9',
          bright: '#4C40F8',
        },
        lavender: '#A3A3EA',
        peach: {
          DEFAULT: '#FCE3D5',
          deep: '#F7D6C2',
        },
        gold: {
          DEFAULT: '#E7BF42',
          bright: '#F6D213',
        },
        ink: {
          DEFAULT: '#242D51',
          body: '#5B5869',
          muted: '#807E8B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-in',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
