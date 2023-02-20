import React from "react";
import { useState } from "react";
import { Box, Card, Tabs, Tab, Typography } from "@mui/material";
import PropTypes from "prop-types";
import AboutMe from "./AboutMe";
import MedDevice from "./MedDevice";
import LabAutomation from "./LabAutomation";
import Compliance from "./Compliance";
import Experience from "./Experience";
import ContactCard from "./ContactCard";
import { GroupsSharp } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Content() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 0, width: "94svw" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
        variant="fullWidth"
        sx={{
          "& button:hover": { color: "#0080ff" },
        }}
      >
        <Tab label="About Me" {...a11yProps(0)} sx={{ color: "#737373" }} />
        <Tab label="Experience" {...a11yProps(1)} sx={{ color: "#737373" }} />
        <Tab
          label="Medical Device"
          {...a11yProps(2)}
          sx={{ color: "#737373" }}
        />
        <Tab
          label="Lab Automation"
          {...a11yProps(3)}
          sx={{ color: "#737373" }}
        />
        <Tab label="Compliance" {...a11yProps(4)} sx={{ color: "#737373" }} />
        <Tab label="Contact Me" {...a11yProps(5)} sx={{ color: "#737373" }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1} className="selection-heading">
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={2} className="selection-heading">
        <MedDevice />
      </TabPanel>
      <TabPanel value={value} index={3} className="selection-heading">
        <LabAutomation />
      </TabPanel>
      <TabPanel value={value} index={4} className="selection-heading">
        <Compliance />
      </TabPanel>
      <TabPanel value={value} index={5} className="selection-heading">
        <ContactCard />
        <br />
        <Typography variant="h6" color="secondary">
          Please contact me if you think I might be able to help your
          organization.
        </Typography>
        <br />
        <Typography variant="h1" color="secondary">
          <GroupsSharp fontSize="inherit" color="secondary" />
        </Typography>
      </TabPanel>
      <br />
    </Box>
  );
}

export default Content;
