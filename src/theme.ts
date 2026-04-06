import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0E9F8A",
    },
    secondary: {
      main: "#FF8A57",
    },
    background: {
      default: "#FFF8EE",
      paper: "#FFFDF8",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Inter", "Raleway", "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: -0.8,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: -0.4,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 138, 87, 0.14)",
          boxShadow: "0 10px 22px rgba(16,24,40,0.06)",
          backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,252,246,0.96))",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
