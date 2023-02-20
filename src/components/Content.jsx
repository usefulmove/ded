import React from "react";
import { useState } from "react";
import { Box, Card, Tabs, Tab, Typography } from "@mui/material";
import PropTypes from "prop-types";
import AboutMe from "./AboutMe";
import ContactCard from "./ContactCard";
import MedDev from "./MedDev";
import Compliance from "./Compliance";

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
    <Box sx={{ borderBottom: 0 }}>
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
        <Tab label="About Me" {...a11yProps(0)} sx={{ color: "#555555" }} />
        <Tab
          label="Medical Device Development"
          {...a11yProps(1)}
          sx={{ color: "#555555" }}
        />
        <Tab
          label="Laboratory Automation"
          {...a11yProps(2)}
          sx={{ color: "#555555" }}
        />
        <Tab label="Compliance" {...a11yProps(3)} sx={{ color: "#555555" }} />
        <Tab
          label="Work Experience"
          {...a11yProps(4)}
          sx={{ color: "#555555" }}
        />
        <Tab label="Get In Touch" {...a11yProps(5)} sx={{ color: "#555555" }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1} className="selection-heading">
        <MedDev />
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        className="selection-heading"
      ></TabPanel>
      <TabPanel value={value} index={3} className="selection-heading">
        <Compliance />
      </TabPanel>
      <TabPanel
        value={value}
        index={4}
        className="selection-heading"
      ></TabPanel>
      <TabPanel value={value} index={5} className="selection-heading">
        <ContactCard />
      </TabPanel>
      <br />
    </Box>
  );
}

export default Content;
