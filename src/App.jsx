import * as React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      p={2}
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs style={{ flexGrow: 0 }}>
        <Header />
      </Grid>
      <Grid item xs style={{ flexGrow: 1 }}>
        <Content />
      </Grid>
      <Grid item xs style={{ flexGrow: 0 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
