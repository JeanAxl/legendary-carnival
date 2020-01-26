import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMyTheme } from "./Theme";

const theme: Theme = createMyTheme({});

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
