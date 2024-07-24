/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      neutral: {
        alpha: "#FBF4F90D",
        50: "#FBF4F9",
        100: "#F8EDF5",
        200: "#EFD7E9",
        300: "#E5BDDB",
        400: "#DBA3CC",
        500: "#CD7EB8",
        600: "#B8479A",
        700: "#58224A",
        800: "#3F1834",
        900: "#281022",
        950: "#281022",
      },
      purple: {
        50: "#F5EAFB",
        100: "#ECD9F7",
        200: "#D9B2F0",
        300: "#C68CE8",
        400: "#B261E0",
        500: "#9F3BD9",
        600: "#8726C0",
        700: "#6C1E99",
        800: "#481466",
        900: "#240A33",
        950: "#12051A",
      },
      pink: {
        50: "#FDF2F7",
        100: "#F9E1EC",
        200: "#F4C3D9",
        300: "#EEA5C6",
        400: "#EA8BB5",
        500: "#E46CA2",
        600: "#DF4E8F",
        700: "#D9307C",
        800: "#971C53",
        900: "#490D28",
        950: "#270715",
      },
      orange: "#FF680A",
    },
    extend: {
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.pink"
        )}, ${theme("colors.purple")})`,
        stars: "url('/background.png')",
        code: "url('/ts-code.webp')",
      }),
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-mono": ["RobotoMono", "monospace"],
        alegreya: ["Alegreya", "serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
