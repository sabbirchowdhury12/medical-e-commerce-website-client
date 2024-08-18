import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add this line
  ],
};
export default config;
