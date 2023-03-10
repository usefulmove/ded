import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Card,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { BusinessCenter, ExpandMore } from "@mui/icons-material";

function CompanyCard({ experience, icon }) {
  const CompanyIcon = icon;

  return (
    <Card
      elevation={6}
      sx={{ borderRadius: 2, border: 1, borderColor: "black" }}
    >
      <center>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="info">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                align="left"
                color="secondary"
              >
                {experience.company}
              </Typography>
              <CompanyIcon color="secondary" />
            </Toolbar>
          </AppBar>
        </Box>
        <List>
          {experience.roles.map((role, index) => (
            <ListItem key={index}>
              <Accordion sx={{ flexGrow: 1 }} elevation={3}>
                <AccordionSummary expandIcon={<ExpandMore color="secondary" />}>
                  <Typography variant="subtitle1" color="secondary">
                    {role.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="secondary">{role.summary}</Typography>
                  <br />
                  <Typography color="primary" variant="body2">
                    {role.span}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>
      </center>
    </Card>
  );
}

export default CompanyCard;
