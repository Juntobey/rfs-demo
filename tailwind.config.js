/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Royal Square brand palette — premium burgundy / navy / gold on cream
        wine: {
          50: '#fbf2f3',
          100: '#f6e2e4',
          200: '#eec3c8',
          300: '#e097a0',
          400: '#cd6470',
          500: '#b23d4c',
          600: '#8f2a38', // primary burgundy
          700: '#6b1e2c',
          800: '#521824',
          900: '#3e1520',
        },
        navy: {
          50: '#f1f5fa',
          100: '#dde8f2',
          200: '#c1d4e8',
          300: '#96b6d6',
          400: '#6491bf',
          500: '#4272a5',
          600: '#325b89',
          700: '#2a4a70', // primary navy
          800: '#1f3a5f',
          900: '#152840',
        },
        gold: {
          50: '#fdf9ef',
          100: '#f9efd4',
          200: '#f2dca4',
          300: '#e9c46a', // accent gold
          400: '#e0ad45',
          500: '#c9902b',
          600: '#a87122',
          700: '#87561f',
          800: '#6f4620',
          900: '#5e3b1e',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf5ec',
          200: '#f4ecdb',
          300: '#ebddc2',
        },
        ink: '#1a1416',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(26,20,22,0.04), 0 8px 24px rgba(26,20,22,0.06)',
        lift: '0 12px 40px rgba(26,20,22,0.12)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
