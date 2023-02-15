import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Board from "./components/Board";
import { Grid, Typography, Box, Tab, Tabs } from "@mui/material";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
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

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={0} p={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              centered
            >
              <Tab label="About Me" {...a11yProps(0)} />
              <Tab label="Research & Development" {...a11yProps(1)} />
              <Tab label="Medical Device Development" {...a11yProps(2)} />
              <Tab label="Laboratory Automation" {...a11yProps(3)} />
              <Tab label="Coaching & Leadership" {...a11yProps(4)} />
              <Tab label="Work Experience" {...a11yProps(5)} />
              <Tab label="Get In Touch" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid item container spacing={2} padding={2} alignItems="center">
              <Grid item xs={6}>
                <Content />
              </Grid>
              <Grid item xs={6}>
                <Board />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} className="selection-heading">
            <Typography variant="h6">
              Developing Incredible Solutions
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2} className="selection-heading">
            <Typography variant="h6">
              Medical Device Development and Global Compliance
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3} className="selection-heading">
            <Typography variant="h6">Lab Automation</Typography>
          </TabPanel>
          <TabPanel value={value} index={4} className="selection-heading">
            <Typography variant="h6">Building Incredible Teams</Typography>
          </TabPanel>
          <TabPanel value={value} index={5} className="selection-heading">
            <Typography variant="h6">Why me?</Typography>
          </TabPanel>
          <TabPanel value={value} index={6} className="selection-heading">
            <Typography variant="h6">How can I help?</Typography>
          </TabPanel>
          <br />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
