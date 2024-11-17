import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {darkTheme,lightTheme} from './theme';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode?darkTheme:lightTheme}>
        <Navbar toggleTheme={toggleTheme}/>
        <Contact></Contact>
      </ThemeProvider>
    </>
  );
}

export default App;




