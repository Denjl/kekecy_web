import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { theme } from "./theme";

export function render() {
  return ReactDOMServer.renderToString(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  );
}