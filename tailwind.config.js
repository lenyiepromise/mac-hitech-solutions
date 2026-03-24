/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#021779',
        'brand-blue-light': '#0a2494',
        'brand-red': '#A40203',
        'brand-red-hover': '#c20304',
        'brand-grey': '#F8F9FA',
        'brand-dark': '#0d1117',
        'brand-muted': '#6c757d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        'brand-accent': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0,0,0,0.04)',
        'card-hover': '0 15px 35px rgba(2, 23, 121, 0.1)',
        'glow-red': '0 10px 40px -10px rgba(164,2,3,0.5)',
        'glow-blue': '0 16px 48px rgba(2,23,121,0.2)',
        'dropdown': '0 20px 60px rgba(2,23,121,0.15)',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39V1H1v38h38z' fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'btn-gradient': 'linear-gradient(to right, #A40203, #c20304)',
      }
    },
  },
  plugins: [],
}
