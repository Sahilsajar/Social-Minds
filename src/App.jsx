import { useState, lazy, Suspense } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route ,useLocation} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import FloatingButton from "./components/FloatingButton";
import FloatingContact from "./components/FloatingContact";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./components/Contact"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Oops = lazy(() => import("./pages/Oops"));

const ConditionalFloatingButton = () => {
  const location = useLocation();

  // Check if the current path is NOT '/contact'
  if (location.pathname === "/Contact") {
    return null; // Do not render the button on the contact page
  }

  return <FloatingButton />;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  

 

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ScrollToTop>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Suspense fallback={<div>Loading...</div>}>
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/*" element={<PageNotFound/>} />
          </Routes>
          <ConditionalFloatingButton  />
         
        </Suspense>
        <Footer />
      </ScrollToTop>
    </ThemeProvider>
  );
}

export default App;
