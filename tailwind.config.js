/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/assets/images/bg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
