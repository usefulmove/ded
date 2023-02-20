import React from "react";
import { Card, Divider, Typography } from "@mui/material";

function Contact() {
  return (
    <center>
      <Card className="cora" elevation={6}>
        <Typography variant="h4" color="primary" gutterBottom={true}>
          Duane Edmonds
        </Typography>
        <Typography variant="h6" color="secondary" gutterBottom={true}>
          2208 Carroll Street #102
          <br />
          Oakland, CA 94606
        </Typography>
        <Typography variant="h6" color="secondary">
          duane@dedmonds.co
        </Typography>
      </Card>
    </center>
  );
}

export default Contact;
