import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import logo from "../assets/logo.png";

function ContactCard() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <center>
          <Card
            className="contact-card"
            elevation={6}
            sx={{ borderRadius: 3, border: 1, borderColor: "black" }}
          >
            <Grid container justifyContent="space-evenly" alignItems="center">
              <Grid item xs={1} md={5.8}>
                <img src={logo} width={"100%"} objectfit="contain" />
              </Grid>
              <Grid item xs={12} md>
                <Typography variant="body1" color="secondary">
                  Robert Duane Edmonds
                  <br />
                  <br />
                  2208 Carroll St. #102
                  <br />
                  Oakland, CA 94606
                  <br />
                  <br />
                  +1 510 393 4416
                  <br />
                  <br />
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
