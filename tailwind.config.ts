import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    colors: {
      darkblue: "#043873",
      blue: "#4F9CF9",
      lightyellow: "#FFE492",
      lightblue: '#A7CEFC',
      bluegray:'#212529'
    }
   },
  plugins: [],
};
export default config;
