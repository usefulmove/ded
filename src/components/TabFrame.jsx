import React from "react";
import { Card, Tabs, Tab, Box } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import randd from "../assets/randd.jpg";
import AboutMe from "./AboutMe";

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

function TabFrame() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
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
          label="Research & Development"
          {...a11yProps(1)}
          sx={{ color: "#555555" }}
        />
        <Tab
          label="Medical Device Development"
          {...a11yProps(2)}
          sx={{ color: "#555555" }}
        />
        <Tab
          label="Laboratory Automation"
          {...a11yProps(3)}
          sx={{ color: "#555555" }}
        />
        <Tab
          label="Coaching & Leadership"
          {...a11yProps(4)}
          sx={{ color: "#555555" }}
        />
        <Tab
          label="Work Experience"
          {...a11yProps(5)}
          sx={{ color: "#555555" }}
        />
        <Tab label="Get In Touch" {...a11yProps(6)} sx={{ color: "#555555" }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1} className="selection-heading">
        <img src={randd} height={"650px"} />
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        className="selection-heading"
      ></TabPanel>
      <TabPanel
        value={value}
        index={3}
        className="selection-heading"
      ></TabPanel>
      <TabPanel
        value={value}
        index={4}
        className="selection-heading"
      ></TabPanel>
      <TabPanel value={value} index={5} className="selection-heading">
        <center>
          <Card className="cora" elevation={6}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Card>
        </center>
      </TabPanel>
      <TabPanel
        value={value}
        index={6}
        className="selection-heading"
      ></TabPanel>
      <br />
    </Box>
  );
}

export default TabFrame;
