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

function CompanyCard({ company }) {
  return (
    <Card elevation={6}>
      <center>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                align="left"
              >
                {company}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <List>
          <ListItem>
            <Accordion sx={{ flexGrow: 1 }}>
              <AccordionSummary expandIcon={<ExpandMore color="primary" />}>
                <Typography variant="subtitle1" color="secondary">
                  Vice President of Engineering
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <ListItem>
            <Accordion sx={{ flexGrow: 1 }}>
              <AccordionSummary expandIcon={<ExpandMore color="primary" />}>
                <Typography variant="subtitle1" color="secondary">
                  Director of Automation
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        </List>
      </center>
    </Card>
  );
}

export default CompanyCard;
