import signature from "../assets/duane-signature-inverted.png";
import * as React from 'react';
import { Grid, Typography } from "@mui/material";

function Content() {
  return (
    <Grid container spacing={8} padding={5}>
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1">
            A seasoned product development professional with over two decades of
            experience and a decade of expertise in the medical device and
            laboratory automation industries. I am renowned for my ability to
            foster strong relationships and effectively lead cross-functional
            teams to deliver innovative solutions that enhance patient outcomes.
            My diverse skill set encompasses business management, automation and
            robotics, product design and development, verification and validation
            testing, risk assessment, data analysis and visualization, business
            intelligence, descriptive and predictive analytics, quality control,
            and global compliance.
          </Typography>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <img src={signature} height={60} />
      </Grid>
    </Grid>
  );
}

export default Content;
