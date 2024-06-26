import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#F4F1FF",
        "accent": "#49D3CC",
        "black": "#1E1E1E",
        "green": "#215250"
      },
      fontFamily: {
        'russo': ['"Russo One"']
      },
      boxShadow: {
        'sm': '4px 4px 2px 0px #215250;',
        'lg': '8px 8px 2px 0px #215250;',
        'xs': '2px 2px 2px 0px #215250;'
      }
    },
  },
  plugins: [],
};
export default config;
