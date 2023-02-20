import { Grid, IconButton } from "@mui/material";
import {
  EmailRounded,
  LinkedIn,
  GitHub,
  CloudDownloadSharp,
} from "@mui/icons-material";
import DeIconButton from "./DeIconButton";

/* LinkedIn Email GitHub Resume */

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
        >
          <DeIconButton icon={LinkedIn} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => {}}>
          <DeIconButton icon={EmailRounded} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          onClick={() => {
            window.open("https://github.com/usefulmove", "_blank");
          }}
        >
          <DeIconButton icon={GitHub} />
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
        >
          <DeIconButton icon={CloudDownloadSharp} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Footer;
