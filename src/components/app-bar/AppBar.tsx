import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

import MUIAppBar from "@material-ui/core/AppBar";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: grey[500],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    link: {
      textTransform: "uppercase",
      textAlign: "center",
      width: "5%",
      margin: theme.spacing(2),
    },
    logo: {
      margin: theme.spacing(2),
      width: "5%",
      fontSize: "3rem",
      textAlign: "center",
      fontWeight: "bold",
    },
  }),
);

export const AppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <MUIAppBar position="sticky">
      <div className={classes.root}>
        <div className={classes.link}>About</div>
        <div className={classes.link}>Join</div>
        <div className={classes.logo}>AG</div>
        <div className={classes.link}>devis</div>
        <div className={classes.link}>contact</div>
      </div>
    </MUIAppBar>
  );
};
