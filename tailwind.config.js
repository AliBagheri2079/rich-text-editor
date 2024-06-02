/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'iran-yekan': ['var(--font-iran-yekan)'],
      },
      borderColor: {
        DEFAULT: 'var(--ant-color-border)',
      },
      borderRadius: {
        DEFAULT: 'var(--ant-border-radius)',
      },
    },
  },
  plugins: [],
};
