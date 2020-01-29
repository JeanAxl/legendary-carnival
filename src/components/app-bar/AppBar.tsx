import React, { Fragment } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

import MUIAppBar from "@material-ui/core/AppBar";
import { AppLink } from "./AppLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginRight: theme.spacing(40),
    },
    logo: {
      margin: theme.spacing(2),
      color: theme.customPalette.green,
      width: "5%",
      fontSize: "2rem",
      textAlign: "center",
      fontWeight: "bold",
    },
  }),
);
const Logo = () => {
  return (
    <Fragment>
      <span>P</span>
      <span>P</span>
      <span>O</span>
    </Fragment>
  );
};

export const AppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <MUIAppBar position="sticky">
      <div className={classes.root}>
        <div className={classes.logo}>PPO</div>
        <AppLink url={"/"} label={"Accueil"} />
        <AppLink url={"/join-us"} label={"Nous rejoindre"} />
        <AppLink url={"/work-with-us"} label={"Travailler avec nous"} />
        <AppLink url={"/contact"} label={"Contact"} />
      </div>
    </MUIAppBar>
  );
};
