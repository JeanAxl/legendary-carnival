import React from "react";
import { createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { WhatWeDo } from "./what-we-do/WhatWeDo";
import { JoinUs } from "./join-us/JoinUs";
import Amplify, { Interactions } from "aws-amplify";
import { ChatBot, AmplifyTheme } from "aws-amplify-react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    sections: {},
  }),
);
export const HomePage: React.FC = () => {
  const classes = useStyles();
  const handleComplete = (err: any, confirmation: any) => {
    if (err) {
      alert("Bot conversation failed");
      return;
    }

    alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "Trip booked. Thank you! what would you like to do next?";
  };
  return (
    <div className={classes.root}>
      <WhatWeDo />
      <JoinUs />
      <ChatBot
        title="My Bot"
        theme={AmplifyTheme}
        botName="BookTrip_dev"
        welcomeMessage="Welcome, how can I help you today?"
        onComplete={handleComplete}
        clearOnComplete={true}
        conversationModeOn={false}
      />
    </div>
  );
};
