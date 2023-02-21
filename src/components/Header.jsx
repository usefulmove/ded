import { Grid, Typography } from "@mui/material";

function Header() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4" color="secondary">
          Duane Edmonds
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom={true} color="primary">
          Medical Devices and Laboratory Automation
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default Header;
