import { Grid, Typography } from "@mui/material";

function Header() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4" color="grey">
          Duane Edmonds
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom={true}>
          Medical Device and Lab Automation Professional
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default Header;
