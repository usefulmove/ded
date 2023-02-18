import * as React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";
import TabFrame from "./components/TabFrame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid container spacing={0} p={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <TabFrame />
        <Grid item xs={12}>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
