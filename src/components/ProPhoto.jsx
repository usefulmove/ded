import duane from "../assets/duane.jpg";
import { Grid } from "@mui/material";

function ProPhoto() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={duane} width={"100%"} objectfit="contain" />
      </Grid>
    </Grid>
  );
}

export default ProPhoto;
