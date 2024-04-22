# React + Vite


`npm create vite@latest app -- --template react`
`cd app`

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

`
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`

`
@tailwind base;
@tailwind components;
@tailwind utilities;
`

`
npm run dev
`