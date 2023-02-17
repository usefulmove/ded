import duane from "../assets/duane.jpg";
import { Grid } from "@mui/material";

function Board() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <img src={duane} height={"650vh"} />
      </Grid>
    </Grid>
  );
}

export default Board;
