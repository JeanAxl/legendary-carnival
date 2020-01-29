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
      width: "auto",
      margin: theme.spacing(2),
    },
    link: {
      boxShadow: `0 5px 0 ${theme.palette.grey["200"]}`,
      color: theme.customPalette.blue,
      padding: "0.5em",
      position: "relative",
      textDecoration: "none",
      textTransform: "uppercase",
      "&:hover": {
        background: theme.palette.grey["100"],
      },
    },
  }),
);

export const AppLink: React.FC<AppLinkProps> = ({ url, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link className={classes.link} to={url}>
        {label}
      </Link>
    </div>
  );
};
