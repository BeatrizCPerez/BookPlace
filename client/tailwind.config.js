/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nuevayork': 'url("https://i.blogs.es/0a44a9/dc-peliculas/1366_2000.webp")',
        'registrer': 'url("https://cdn.sortiraparis.com/images/80/66131/994455-avatar-frontiers-of-pandora-le-jeu-d-ubisoft-est-passe-gold.jpg")'
      }
    },
  },
  plugins: [
  ],
}


