import duane from "../assets/duane.jpg";
import { Grid } from "@mui/material";

function ProfessionalPhoto() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={duane} height={"100%"} width={"100%"} objectFit="contain" />
      </Grid>
    </Grid>
  );
}

export default ProfessionalPhoto;
