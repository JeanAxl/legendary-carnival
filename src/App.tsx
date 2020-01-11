import React from "react";
import "./App.css";
import { createStyles } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AppBar } from "./components/app-bar/AppBar";

const styles = createStyles({
  root: {
    color: "red",
  },
});

const useStyles = makeStyles(styles);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar />
    </div>
  );
};

export default App;
