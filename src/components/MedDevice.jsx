import React from "react";
import { Grid } from "@mui/material";
import TopicList from "./TopicList";
import { MedicalServices } from "@mui/icons-material";

function MedDevice() {
  const blurb = `I am able to provide design support services to help your organization advance your product development, product improvement and new product introduction goals. Key areas of focus are:`;
  const bullets = [
    "Design Controls",
    "Project planning and management including cost and project risk management",
    "Requirements definition and management",
    "Design inputs and design outputs",
    "Software development in agreement with IEC 62304 (Software Life Cycle Processes)",
    "Product risk evaluation and management in agreement with ISO 14971 (Risk Management)",
    "Design verification and validation including protocol definition, test execution, and generation of verification reports",
    "Safety and compliance standards testing including IEC 60601 (Medical Electrical Equipment – Basic Safety and Essential Performance)",
    "Product validation and Clinical Evaluation Reports (MEDDEV 2.7/1)",
    "Trace matrix definition relationships between product requirements and risk controls, design outputs, and verification and validation results",
    "Design transfer to production and continuous improvement Documentation of Design History Files, Technical Files (Technical Documentation), documentation in support of 510(k), CE mark, and other regulatory submissions",
    "Considerable knowledge of the expectations and requirements of FDA Title 21 CFR 820 (Quality System Regulation) and Medical Device Directive 93/42/EEC, as well as ISO 13485 (Quality Management System)",
  ];

  return (
    <Grid container>
      <center>
        <Grid item xs={8}>
          <MedicalServices fontSize="medium" color="secondary" />
          <TopicList
            title="Medical Device Development"
            lead={blurb}
            listItems={bullets}
          />
        </Grid>
      </center>
    </Grid>
  );
}

export default MedDevice;
