import React from "react";
import { Grid } from "@mui/material";
import { Assessment } from "@mui/icons-material";
import TopicList from "./TopicList";

const blurb =
  "I provide descriptive and predictive analytics support to help your organization understand opportunities for improvement. Examples include the analysis of customer complaint data to understand trends in product reliability and customer service and identify product and process improvements that will strengthen both the company and the product and enhance the customer’s experience and the development of COVID-19 statistical risk prediction modeling analysis using open access epidemiological data and Google’s Community Mobility Reports (mobile phone and traffic data), comparing relative risk by country and each U.S. county and state.";
const bullets = [];

function BusinessAnalytics() {
  return (
    <Grid container>
      <center>
        <Grid item xs={12} lg={8}>
          <Assessment fontSize="medium" color="secondary" />
          <TopicList
            title="Business Intelligence and Analytics"
            lead={blurb}
            listItems={bullets}
          />
        </Grid>
      </center>
    </Grid>
  );
}
export default BusinessAnalytics;
