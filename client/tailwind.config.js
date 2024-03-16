/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Login': 'url("https://fotografias.larazon.es/clipping/cmsimages01/2023/06/01/341A2EFC-88F2-44C6-B79F-369BFEEA6086/imagen-archivo-libros_97.jpg?crop=6067,3413,x0,y45&width=1600&height=900&optimize=low&format=webply")',
        'registrer': 'url("https://www.latercera.com/resizer/wAlqO3o0TJT9Aw9QDYRBiHRr3CM=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/PDF2GPQTENESHNN4C5OO6OLBRE.jpg")',
        'books': 'url("https://img.freepik.com/foto-gratis/gran-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29739.jpg?w=826&t=st=1710610681~exp=1710611281~hmac=a9182aaade0001eab120d67dc952bb76d5046bd6df5cd01d3a247826426ada6d")'
      }
    },
  },
  plugins: [
  ],
}


