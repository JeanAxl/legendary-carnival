import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export const AppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <MUIAppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
};
