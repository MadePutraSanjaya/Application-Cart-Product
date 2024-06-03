import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#FFFFFF",
        "primary1" : "#363738",
        "secondary" : "#F5F5F5",
        "secondary1" : "#FEFAF1",
        "bg" : "#FFFFFF",
        "text" : "#FAFAFA",
        "text1" : "#7D8184",
        "text2" : "#141414",
        "button" : "#141414",
        "secondary2" : "#DB4444",
        "button1" : "#00FF66",
        "button2" : "#DB4444",
        "hover-button" : "#E07575",
        "hover-button1" : "#A0BCE0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: false,
},
};
export default config;
