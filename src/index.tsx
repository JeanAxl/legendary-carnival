import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme: Theme = createMuiTheme();

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
