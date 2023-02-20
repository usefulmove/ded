import { Grid, IconButton } from "@mui/material";
import {
  EmailRounded,
  LinkedIn,
  GitHub,
  CloudDownloadSharp,
} from "@mui/icons-material";

/* LinkedIn GitHub Email Resume */

function Footer() {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <IconButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/dedmonds/", "_blank");
          }}
          color="primary"
          component="label"
        >
          <LinkedIn />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          onClick={() => {
            window.open("https://github.com/usefulmove", "_blank");
          }}
          color="primary"
          component="label"
        >
          <GitHub />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => {}} color="primary" component="label">
          <EmailRounded />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          onClick={() => {
            window.open(
              "https://github.com/usefulmove/o/raw/main/dedmonds_resume.pdf",
              "_blank"
            );
          }}
          color="primary"
          component="label"
        >
          <CloudDownloadSharp />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Footer;
