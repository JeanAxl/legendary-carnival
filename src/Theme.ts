import { createMuiTheme } from "@material-ui/core/styles";
import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customPalette: {
      grey: React.CSSProperties["color"];
      blue: React.CSSProperties["color"];
      green: React.CSSProperties["color"];
      gold: React.CSSProperties["color"];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette?: {
      grey?: React.CSSProperties["color"];
      blue?: React.CSSProperties["color"];
      green?: React.CSSProperties["color"];
      gold?: React.CSSProperties["color"];
    };
  }
}

export const createMyTheme = (options: ThemeOptions) => {
  return createMuiTheme({
    customPalette: {
      blue: "#2E74B5",
      grey: "#808080",
      green: "#8ABD18",
      gold: "#BF8F00",
    },
    ...options,
  });
};
