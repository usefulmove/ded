import { Grid } from "@mui/material";
import {
  AlternateEmailRounded,
  AccountCircleOutlined,
  CodeSharp,
  CloudDownloadSharp,
} from "@mui/icons-material";
import DeIconButton from "./DeIconButton";

function Footer() {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <DeIconButton icon={AccountCircleOutlined} />
      </Grid>
      <Grid item>
        <DeIconButton icon={AlternateEmailRounded} />
      </Grid>
      <Grid item>
        <DeIconButton icon={CodeSharp} />
      </Grid>
      <Grid item>
        <DeIconButton icon={CloudDownloadSharp} />
      </Grid>
    </Grid>
  );
}

export default Footer;

/* LinkedIn email GitHub */
