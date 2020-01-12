import React from "react";
import { Section } from "../common/section/Section";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "grid",
      gridTemplateColumns: "10% auto 60%",
      gridTemplateRows: "100%",
    },
    description: {
      background: grey[500],
      color: "white",
      padding: theme.spacing(3),
    },
    imageWrapper: {
      height: "100%",
    },
    image: {
      width: "100%",
      maxHeight: "100%",
    },
    action: {
      background: grey[300],
    },
    descriptionHeadline: {
      textTransform: "uppercase",
      fontSize: "4rem",
    },
    button: {
      color: "white",
      borderRadius: 0,
      borderColor: "white",
    },
  }),
);

export const JoinUs: React.FC = () => {
  const classes = useStyles();
  return (
    <Section>
      <div className={classes.root}>
        <div />
        <div className={classes.imageWrapper}>
          <img className={classes.image} src="images/garden-team.jpg" alt="" />
        </div>
        <div className={classes.description}>
          <Typography className={classes.descriptionHeadline} variant={"h1"}>
            envie de nous rejoindre ?
          </Typography>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex""
          </p>
          <Button className={classes.button} variant="outlined" color="primary">
            Rejoins nous !
          </Button>
        </div>
      </div>
    </Section>
  );
};
