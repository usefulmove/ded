import React from "react";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";
import {
  HealthAndSafety,
  NordicWalking,
  PrecisionManufacturing,
  ScienceSharp,
} from "@mui/icons-material";
import sb from "../experience/SummerBio.json";
import jandj from "../experience/JohnsonAndJohnson.json";
import ekso from "../experience/EksoBionics.json";
import agilent from "../experience/Agilent.json";
import bpc from "../experience/BerkeleyProcessControl.json";

function Experience() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={sb} icon={ScienceSharp} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={jandj} icon={HealthAndSafety} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={ekso} icon={NordicWalking} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={agilent} icon={ScienceSharp} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={bpc} icon={PrecisionManufacturing} />
      </Grid>
    </Grid>
  );
}

export default Experience;
