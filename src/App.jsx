import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Navbar from "./components/Navbar";

import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


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
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      </ThemeProvider>
      
    </>
  );
}

export default App;
