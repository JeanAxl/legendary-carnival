import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      width: "10%",
      borderBottom: `2px solid ${theme.customPalette.blue}`,
    },
  }),
);
export const Divider: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};
