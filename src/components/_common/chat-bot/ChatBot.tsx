import React from "react";
import { ChatBot, AmplifyTheme } from "aws-amplify-react";

export const PPOChatBot: React.FC = () => {
  const handleComplete = (err: any, confirmation: any) => {
    if (err) {
      alert("Bot conversation failed");
      return;
    }

    alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "Trip booked. Thank you! what would you like to do next?";
  };
  return (
    <ChatBot
      title="My Bot"
      theme={AmplifyTheme}
      botName="BookTrip_dev"
      welcomeMessage="Welcome, how can I help you today?"
      onComplete={handleComplete}
      clearOnComplete={true}
      conversationModeOn={false}
    />
  );
};
