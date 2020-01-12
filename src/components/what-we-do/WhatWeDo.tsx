import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Section } from "../common/section/Section";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
    },
    leftSection: {
      flex: 1,
      //background: grey[500],
    },
    rightSection: {
      flex: 1,
      background: "white",
    },
    descriptionContainer: {
      color: grey[500],
      padding: theme.spacing(3),
    },
    illustrationContainer: {
      //padding: theme.spacing(3),
      height: "100%",
    },
    image: {
      height: "100%",
      width: "auto",
    },
    descriptionHeadline: {
      textTransform: "uppercase",
      color: grey[700],
    },
    button: {
      color: grey[500],
      borderRadius: 0,
      borderColor: grey[500],
    },
  }),
);

export const WhatWeDo: React.FC = () => {
  const classes = useStyles();
  return (
    <Section>
      <div className={classes.root}>
        <div className={classes.leftSection}>
          <div className={classes.descriptionContainer}>
            <Typography className={classes.descriptionHeadline} variant={"h1"}>
              qui on est
            </Typography>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </p>
            <Button className={classes.button} variant="outlined" color="primary">
              En savoir plus
            </Button>
          </div>
        </div>
        <div className={classes.rightSection}>
          <div className={classes.illustrationContainer}>
            <img className={classes.image} src="images/evian-14.jpg" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};
