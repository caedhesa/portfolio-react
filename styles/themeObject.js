import { useState } from "react";

const themeObject = {
  palette: {
    type: "dark",
    primary: {
      main: "#dc004e",
    },
    background: {
      default: "#414141",
      cube: "radial-gradient(#2D3436,#000000 150%) no-repeat",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiPopover: {
      style: {
        zIndex: 1302,
      },
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "8rem",
      fontWeight: 600,
    },
    h2: {
      fontWeight: 400,
    },
    body2: {
      fontSize: "2rem",
      fontWeight: 300,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          "-webkit-tap-highlight-color": "transparent",
        },
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);
  const {
    palette: { type },
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
        primary: {
          main: type === "light" ? "#dc004e" : "#5680c9",
        },
        background: {
          default: type === "light" ? "#414141" : "#eef2f3",
          cube:
            type == "light"
              ? "radial-gradient(#2D3436,#000000 150%) no-repeat"
              : "radial-gradient(#eef2f3,#8e9eab 150%) no-repeat",
        },
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};
