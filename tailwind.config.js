/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'iran-yekan': ['var(--font-iran-yekan)'],
      },
      borderColor: {
        DEFAULT: '#939393',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
    },
  },
  plugins: [],
};
