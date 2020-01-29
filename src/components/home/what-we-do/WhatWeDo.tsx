import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Section } from "../../common/section/Section";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Divider } from "../../_common/divider/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    leftSection: {
      flex: 1,
      //background: grey[500],
    },
    rightSection: {
      background: "white",
    },
    descriptionContainer: {
      color: grey[500],
      padding: theme.spacing(8),
    },
    descriptionContent: {},
    descriptionHeadline: {
      textTransform: "uppercase",
      color: theme.customPalette.blue,
    },
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      width: "10%",
      borderBottom: `2px solid ${theme.customPalette.blue}`,
    },
    illustrationContainer: {
      //padding: theme.spacing(3),
      height: "100%",
    },
    image: {
      maxHeight: "400px",
      width: "auto",
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

export const WhatWeDo: React.FC = () => {
  const classes = useStyles();
  return (
    <Section>
      <div className={classes.root}>
        <div className={classes.leftSection}>
          <div className={classes.descriptionContainer}>
            <Typography className={classes.descriptionHeadline} variant={"h2"}>
              c'est une histoire d'écolier
            </Typography>
            <Divider />
            <p className={classes.descriptionContent}>
              C’est l’histoire de huit étudiants devant créer une entreprise fictive pour leurs études au sein de
              l’IFAG. Le secteur d’activité ? Aucun doute possible, par leur passion commune, le paysagisme était une
              évidence...
            </p>
            <div className={classes.buttonContainer}>
              <Button className={classes.button} variant="outlined" color="primary">
                En savoir plus
              </Button>
            </div>
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
