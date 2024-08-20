import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   colors: {
    darkblue: '#043873',
    blue: '#4F9CF9',
    lightyellow: '#FFE492',
    lightblue: '#A7CEFC',
    bluegray: '#212529',
   },
   screens: {
    '2xl': '1920px',
    xl: '1440px',
    lg: '1152px',
    md: '768px',
    sm: '320px',
   },
  },
 },
 plugins: [],
};
export default config;
