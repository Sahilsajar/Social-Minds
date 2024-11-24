import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<ServicePage></ServicePage>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
