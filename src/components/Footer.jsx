import { Button, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Button variant="text">Contact Me</Button>
      </Grid>
    </Grid>
  );
}

export default Footer;
