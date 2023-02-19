import React from "react";
import { Grid, Typography } from "@mui/material";

function MedDev() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h6">
          I am able to provide design support services to help your organization
          advance your product development, product improvement and new product
          introduction goals. Some of my key areas of focus are:
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <ul>
          <li>Design Controls</li>
          <li>
            Project planning and management including cost and project risk
            management
          </li>
          <li>Requirements definition and management</li>
          <li>Design inputs and design outputs</li>
          <li>
            Software development in agreement with IEC 62304 (Software Life
            Cycle Processes)
          </li>
          <li>
            Product risk evaluation and management in agreement with ISO 14971
            (Risk Management)
          </li>
          <li>
            Design verification and validation including protocol definition,
            test execution, and generation of verification reports
          </li>
          <li>
            Safety and compliance standards testing including IEC 60601 (Medical
            Electrical Equipment – Basic Safety and Essential Performance)
          </li>
          <li>
            Product validation and Clinical Evaluation Reports (MEDDEV 2.7/1)
          </li>
          <li>
            Trace matrix definition relationships between product requirements
            and risk controls, design outputs, and verification and validation
            results
          </li>
          <li>
            Design transfer to production and continuous improvement
            Documentation of Design History Files, Technical Files (Technical
            Documentation), documentation in support of 510(k), CE mark, and
            other regulatory submissions
          </li>
          <li>
            Considerable knowledge of the expectations and requirements of FDA
            Title 21 CFR 820 (Quality System Regulation) and Medical Device
            Directive 93/42/EEC, as well as ISO 13485 (Quality Management
            System)
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default MedDev;
