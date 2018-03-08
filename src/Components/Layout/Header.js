import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import { styles } from "./styles";

function Header({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            align="left"
            variant="title"
            color="inherit"
            className={classes.flex}
          >
            2nd Hand
          </Typography>
          <Button color="inherit">Publish</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
