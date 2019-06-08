import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  input: {
    color: "white",
    margin: 10,
    borderBottom: 'white',
    fontSize: 16
  }
};

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <TextField
      {...props}
      InputLabelProps={{
          style: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            color: 'white',
            fontSize: 20
      }}}
      InputProps={{
        className: classes.input
      }}
    />
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
