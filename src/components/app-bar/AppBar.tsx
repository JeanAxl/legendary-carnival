import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

import MUIAppBar from "@material-ui/core/AppBar";
import { grey } from "@material-ui/core/colors";
import { AppLink } from "./AppLink";

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
        <AppLink url={"/"} label={"Accueil"} />
        <AppLink url={"/join-us"} label={"Nous rejoindre"} />
        <div className={classes.logo}>AG</div>
        <AppLink url={"/work-with-us"} label={"Travailler avec nous"} />
        <AppLink url={"/contact"} label={"Contact"} />
      </div>
    </MUIAppBar>
  );
};
