import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./components/app-bar/AppBar";
import { HomePage } from "./components/home/HomePage";
import { JoinUsPage } from "./components/join-us/JoinUsPage";

const App: React.FC = () => {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path={"/join-us"}>
          <JoinUsPage />
        </Route>
        <Route path={"/"}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
