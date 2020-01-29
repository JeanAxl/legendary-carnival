import React from "react";
import { createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { WhatWeDo } from "./what-we-do/WhatWeDo";
import { JoinUs } from "./join-us/JoinUs";
import { ContactUs } from "./contact-us/ContactUs";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    sections: {},
  });
});

export const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WhatWeDo />
      <JoinUs />
      <ContactUs />
    </div>
  );
};
