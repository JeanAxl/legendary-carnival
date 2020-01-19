import React, { Fragment } from "react";
import "./App.css";

import { AppBar } from "./components/app-bar/AppBar";
import { HomePage } from "./components/home/HomePage";

const App: React.FC = () => {
  return (
    <Fragment>
      <AppBar />
      <HomePage />
    </Fragment>
  );
};

export default App;
