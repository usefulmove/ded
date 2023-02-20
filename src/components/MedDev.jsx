import React from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Commit } from "@mui/icons-material";

function MedDev() {
  const listItems = [
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
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" align="left">
          I am able to provide design support services to help your organization
          advance your product development, product improvement and new product
          introduction goals. Key areas of focus are:
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <List>
          {listItems.map((item) => (
            <>
              <ListItem>
                <ListItemIcon>
                  <Commit fontSize="small" color="primary" />
                </ListItemIcon>
                <Typography variant="h6">{item}</Typography>
              </ListItem>
            </>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default MedDev;
