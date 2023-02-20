import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  mode: "dark",
  palette: {
    primary: {
      main: "#0080ff",
      light: "#00c0ff",
      dark: "#0066cc",
    },
    secondary: {
      main: "#faf6e4",
      light: "#ffffff",
      dark: "#eeeeee",
    },
    info: {
      main: "#003f7e",
    },
    background: {
      main: "#303030",
      default: "#343434",
      paper: "#404040",
    },
    white: {
      main: "#ffffff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
