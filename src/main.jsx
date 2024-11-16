import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
const theme = {
  primaryColor: "blue",
  secondaryColor: "gray",
};

{
  /* <ThemeProvider theme={theme}>
  <App />
</ThemeProvider>; */
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
