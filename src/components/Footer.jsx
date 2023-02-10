import { Button, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2} xs={6}>
      <Grid item>
        <Button variant="contained" size="small">Contact Me</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" size="small">Resume</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" size="small" onClick={() => alert("I understand")}>Complain about Xóchitl</Button>
      </Grid>
    </Grid>
  );
}

export default Footer;
