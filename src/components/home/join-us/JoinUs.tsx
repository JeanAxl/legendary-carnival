import React from "react";
import { Section } from "../../common/section/Section";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Divider } from "../../_common/divider/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(3),
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    descriptionContainer: {
      padding: theme.spacing(8),
    },
    descriptionContent: {
      marginTop: theme.spacing(8),
      color: grey[500],
    },
    imageContainer: {
      height: "100%",
    },
    image: {
      width: "auto",
      maxHeight: "400px",
    },
    descriptionHeadline: {
      textTransform: "uppercase",
      color: theme.customPalette.blue,
    },
    buttonContainer: {
      marginTop: theme.spacing(4),
    },
    button: {
      color: grey[500],
      borderRadius: 0,
      borderColor: grey[500],
    },
  }),
);

export const JoinUs: React.FC = () => {
  const classes = useStyles();
  return (
    <Section>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src="images/join.jpg" alt="" />
        </div>
        <div className={classes.descriptionContainer}>
          <Typography className={classes.descriptionHeadline} variant={"h2"}>
            Nous recrutons
          </Typography>
          <Divider />
          <p className={classes.descriptionContent}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex""
          </p>
          <div className={classes.buttonContainer}>
            <Button className={classes.button} variant="outlined" color="primary">
              Rejoins nous !
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
