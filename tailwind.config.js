/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Habilitar modo oscuro basado en clase
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Azul más claro para mejor visibilidad
        secondary: {
          light: '#F8FAFC', // Color secundario para modo claro
          DEFAULT: '#0F172A', // Azul oscuro (más oscuro que negro para mejor contraste)
          dark: '#0F172A', // Color secundario para modo oscuro
        },
        accent: '#60A5FA', // Azul claro para acentos
        light: '#F8FAFC', // Blanco más limpio
        dark: '#111827', // Color oscuro para texto en modo claro
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulseSlow 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.5)',
        'glow-md': '0 0 15px rgba(59, 130, 246, 0.6)',
        'glow-lg': '0 0 20px rgba(59, 130, 246, 0.7)',
      },
    },
  },
  plugins: [],
}; 