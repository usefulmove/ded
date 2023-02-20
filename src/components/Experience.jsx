import React from "react";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

function Experience() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard company={"SummerBio"} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard company={"Johnson & Johnson"} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard company={"Ekso Bionics"} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard company={"Agilent Technologies"} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard company={"Berkeley Process Control"} />
      </Grid>
    </Grid>
  );
}

export default Experience;
