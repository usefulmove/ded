import React from "react";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";
import {
  HealthAndSafety,
  NordicWalking,
  PrecisionManufacturing,
  ScienceSharp,
} from "@mui/icons-material";

const summerbio = {
  company: "SummerBio",
  roles: [
    {
      title: "Vice President of Engineering",
      summary:
        "Managed automation engineering, cloud computing and laboratory information managemen systems (LIMS) engineering teams, as well as program management. Committed to making a difference in fast-turnaround, high-availability and high-throughput SARS-CoV-2 (COVID-19) qRT-PCR (quantitative reverse transcription PCR) clinical diagnostics",
      span: "Jan 2022 - Aug 2022",
    },
    {
      title: "Director of Automation",
      summary:
        "Managed the development, implementation, verification and assay validation of a variable-ratio, high-throughput automate sample pooling system",
      span: "Aug 2021 - Jan 2022",
    },
  ],
};

const jandj = {
  company: "Johnson & Johnson",
  roles: [
    {
      title: "Program Manager, Robotics & Digital Solutions",
      summary:
        "Managed multiple cross-functional teams in the design and development of the Ottava surgical robotic system (robot-assisted surgery) focused on risk management, requirements definition, procedure development and workspace analysis (gastric bypass, vertral hernia, hysterectomy, partial nephrectomy)",
      span: "Sep 2020 - Jul 2021",
    },
  ],
};

const ekso = {
  company: "Ekso Bionics",
  roles: [
    {
      title: "Director of R&D and Compliance",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      span: "Mar 2015 - Sep 2019",
    },
    {
      title: "Director of Software Engineering",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      span: "Sep 2021 - Aug 2022",
    },
    {
      title: "Program Manager",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      span: "Sep 2021 - Aug 2022",
    },
  ],
};

const agilent = {
  company: "Agilent Technologies",
  roles: [
    {
      title: "R&D Hardware and Systems Engineer",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      span: "Sep 2021 - Aug 2022",
    },
  ],
};

const bpc = {
  company: "Berkeley Process Control",
  roles: [
    {
      title: "Project Manager",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      span: "Sep 2021 - Aug 2022",
    },
    {
      title: "Controls Engineer",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      span: "Sep 2021 - Aug 2022",
    },
  ],
};

function Experience() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={summerbio} icon={ScienceSharp} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={jandj} icon={HealthAndSafety} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={ekso} icon={NordicWalking} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={agilent} icon={ScienceSharp} />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <CompanyCard experience={bpc} icon={PrecisionManufacturing} />
      </Grid>
    </Grid>
  );
}

export default Experience;
