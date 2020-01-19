import React from "react";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

type AppLinkProps = {
  url: string;
  label: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "uppercase",
      textAlign: "center",
      width: "5%",
      margin: theme.spacing(2),
    },
  }),
);

export const AppLink: React.FC<AppLinkProps> = ({ url, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={url}>{label}</Link>
    </div>
  );
};
