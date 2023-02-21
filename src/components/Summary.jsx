import signature from "../assets/duane-signature-inverted.png";
import * as React from "react";
import { Grid, Typography } from "@mui/material";

function Summary() {
  return (
    <Grid container spacing={8} padding={4}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
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
      </Grid>
      <Grid item xs={12}>
        <img src={signature} height={90} />
      </Grid>
    </Grid>
  );
}

export default Summary;
