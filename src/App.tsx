import React, { Fragment } from "react";
import "./App.css";
import { createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AppBar } from "./components/app-bar/AppBar";
import { WhatWeDo } from "./components/what-we-do/WhatWeDo";
import { JoinUs } from "./components/JoinUse/JoinUs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    sections: {},
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar />
      <div className={classes.root}>
        <WhatWeDo />
        <JoinUs />
      </div>
    </Fragment>
  );
};

export default App;
