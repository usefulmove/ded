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
      main: "#516fa3",
      light: "#00c0ff",
      dark: "#0066cc",
    },
    secondary: {
      main: "#faf6e4",
      light: "#ffffff",
      dark: "#eeeeee",
    },
    info: {
      main: "#516fa3",
    },
    background: {
      main: "#303030",
      default: "#343434",
      paper: "#585858",
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
