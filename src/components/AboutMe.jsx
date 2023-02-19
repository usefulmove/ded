import React from "react";
import Summary from "./Summary";
import ProfessionalPhoto from "./ProfessionalPhoto";
import { Grid } from "@mui/material";

function AboutMe() {
  return (
    <Grid item container spacing={2} padding={2} alignItems="center">
      <Grid item xs={12} lg={6}>
        <Summary />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ProfessionalPhoto />
      </Grid>
    </Grid>
  );
}

export default AboutMe;
