/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*(.{svelte,html,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
