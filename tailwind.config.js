/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-cielo': '#1E90FF',
        'verde-menta': '#00C49A',
        'naranja-palido': '#FF8A5B',
        'gris-oscuro': '#333333',
        'gris-claro': '#F5F5F5',
        'texto-secundario': '#4F4F4F',
        'body-dashboard': "#000027",
        'gris-oscuro-intenso': '#2b2b2b',
        'naranja-vivo': '#ff7100',
        'amarillo-oro': '#FFC107',
        'rojo-coral': '#FF6F61',
        //hovers
        'azul-palido': '#7abdff',
        'verde-suave': '#94cb98',
        // Web
        'body': '#33678A',
        'navbar-web':'#4A81A1',
        'component': '#78A6C8',
        'semi-blanco': '#E9EEF2',
        'naranja-web': '#FF6502',
        // 'naranja-web': '#E65C4F'

      },
      boxShadow: {
        'card': '0 0px 6px 7px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}