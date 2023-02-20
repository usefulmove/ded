import React from "react";
import { Grid } from "@mui/material";
import TopicList from "./TopicList";

function Compliance() {
  const bullets = [
    "Quality Management System (QMS)",
    "Development and improvement of product development, design controls, risk management, customer complaint handling, verification and validation processes",
    "Standards conformance to product safety standards such as IEC 60601 (Medical Electrical Equipment – Basic Safety and Essential Performance",
    "Compliance with ISO 14971 (Application of risk management to medical devices)",
    "Execution of IEC 62366 (Application of usability engineering to medical devices)",
    "Regulatory submissions including 510(k) and CE mark",
    "Resolution of regulatory issues coming from audit findings and FDA 483s",
    "Adverse event reporting and management",
    "Construction of Clinical Evaluation Reports (CERs) according to MEDDEV 2.7/1 (Clinical Evaluation)",
  ];
  const blurb = `I provide standards and regulatory compliance support services to help your organization navigate the path to getting your products on the market. Some key areas of focus include:`;

  return (
    <Grid container>
      <center>
        <Grid item xs={8}>
          <TopicList
            title="Regulatory Compliance"
            lead={blurb}
            listItems={bullets}
          />
        </Grid>
      </center>
    </Grid>
  );
}

export default Compliance;
