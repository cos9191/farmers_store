import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/themes/default";
import ReactDOM from "react-dom/client";

import App from "/src/components/app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
