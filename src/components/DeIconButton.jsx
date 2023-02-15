import { IconButton } from "@mui/material";
import { PropTypes } from "prop-types";

function DeIconButton({ icon }) {
  const DeIcon = icon;

  return (
    <>
      <IconButton color="primary" component="label" >
        <DeIcon />
      </IconButton>
    </>
  );
}

DeIconButton.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default DeIconButton;
