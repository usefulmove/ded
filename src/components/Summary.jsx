import signature from "../assets/duane-signature-inverted.png";
import * as React from "react";
import { Grid, Typography } from "@mui/material";

function Summary() {
  return (
    <Grid container spacing={8} padding={5}>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography variant="h6" align="center" color="secondary">
            Experienced product development professional with more than 23 years
            of experience and 14 years in the medical device and lab automation
            industries with a proven record of building relationships and
            helping diverse, cross-functional teams deliver innovative solutions
            to improve patient outcomes. Solid background in business
            management, automation and robotics, design and development,
            verification and validation testing, risk management, data analysis
            and visualization, business intelligence, descriptive and predictive
            analytics, quality management, and global compliance.
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid item xs={12}>
        <img src={signature} height={60} />
      </Grid>
    </Grid>
  );
}

export default Summary;
