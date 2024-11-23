import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        subtitulo: "#FEFFF5",
      },
      backgroundImage: {
        "gradiente-pag":
          "linear-gradient(50deg, #3B1B4D -285.27%, #A07729 13.23%, #FFCE07 111.94%)",
        "gradiente-sobrenos":
          "linear-gradient(335deg, #FFCE07 -22.08%, #623E3F 6.05%, #3B1B4D 53.67%, #602C7D 95.82%, #893FB3 136.32%);",
        "gradiente-portifolio":
          "linear-gradient(260deg, #FFCE07 -21.64%, #623E3F 3.26%, #3B1B4D 45.41%, #602C7D 82.73%, #893FB3 118.58%);",
        "gradiente-fundo":
          "linear-gradient(260deg, #FFCE07 -21.64%, #623E3F 3.26%, #3B1B4D 45.41%, #602C7D 82.73%, #893FB3 118.58%)",
        "gradiente-home":
          "linear-gradient(260deg, #FFCE07 -23.85%, #B18723 -12.79%, #8C6530 -1.7%, #623E3F 23.93%, #4E2C46 42.79%, #3B1B4D 58.74%, #4B2262 76.87%, #602C7D 92.7%, #893FB3 118.58%)",
      },
      screens: {
        sm: "350px",
        "bp-1024": "1024px",
        bp440: "440px",
        "bp-500": "500px",
        "bp-840": "840px",
        md: "768px",
        lg: "1280px",
        llg: "1440px",
        lgg: "1800px",
        xl: "1920px",
        "2xl": "2560px",
        "3xl": "3440px",
      },
    },
  },
  plugins: [],
};

export default config;
