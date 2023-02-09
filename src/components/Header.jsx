import { Grid, Typography } from "@mui/material";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Grid
      container
      spacing={1}
    >
      <Grid item>
        <img src={logo} height={25} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Duane Edmonds</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          Medical Device Development and Laboratory Automation
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default Header;
