import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import logo from "../assets/logo.png";

function ContactCard() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <center>
          <Card className="contact" elevation={6}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={5.5}>
                <img src={logo} width={"100%"} objectfit="contain" />
              </Grid>
              <Grid item xs={6.5}>
                <Typography variant="h6" color="secondary" gutterBottom={true}>
                  2208 Carroll Street #102
                  <br />
                  Oakland, CA 94606
                </Typography>
                <Typography variant="h6" color="secondary" gutterBottom={true}>
                  +1 510 393 4416
                </Typography>
                <Typography variant="h6" color="secondary">
                  duane@dedmonds.co
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </center>
      </Grid>
    </Grid>
  );
}

export default ContactCard;
