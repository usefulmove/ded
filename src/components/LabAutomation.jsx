import React from "react";
import { Grid } from "@mui/material";
import TopicList from "./TopicList";
import { ScienceSharp } from "@mui/icons-material";

function LabAutomation() {
  const blurb = `I am able to provide design support services to help your organization advance your product development, product improvement and new product introduction goals. Key areas of focus are:`;
  const bullets = [
    "Design Controls",
    "Project planning and management including cost and project risk management",
  ];

  return (
    <Grid container>
      <center>
        <Grid item xs={8}>
          <ScienceSharp fontSize="large" color="secondary" />
          <TopicList
            title="Laboratory Automation"
            lead={blurb}
            listItems={bullets}
          />
        </Grid>
      </center>
    </Grid>
  );
}

export default LabAutomation;
