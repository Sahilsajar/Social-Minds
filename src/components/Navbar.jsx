import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../themeContext/ThemeContext";


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const location = useLocation();

  useEffect(() => {
    setOpenNav(false);
  },[location])

  console.log(theme)
  return (
    <>
    <StyledDiv className="flex items-center text-gray-600 bg-white dark:bg-dark dark:text-white fixed top-0 left-0 right-0 z-50">
      <h1 className="ml-10">
        Logo
      </h1>
      <div className="hidden md:flex items-center absolute right-0 mr-20 gap-9 cursor-pointer w-fit">
        <Link to="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link to="/works" className="hover:text-blue-300">
          Works
        </Link>
        <Link to="/features" className="hover:text-blue-300">
          Features
        </Link>
        <Link to="/services" className="hover:text-blue-300">
          Services
        </Link>
        <Link to="/pricing" className="hover:text-blue-300">
          Pricing
        </Link>
      </div>
      <div
        className="absolute md:right-10 right-20 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <MdOutlineLightMode size={24} className="text-black" aria-label="Light mode icon" />
        ) : (
          <MdLightMode size={24} className="text-white" aria-label="Dark mode icon" />
        )}
      </div>

      {openNav ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 101 101"
          width="28"
          height="28"
          className="absolute right-5 md:hidden cursor-pointer transition-transform transform rotate-90"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Close menu"
        >
          <path
            fill="currentColor"
            d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 512 512"
          className="absolute right-2 md:hidden cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Open menu"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
          >
            <path
              d="M1538 3345 c-34 -19 -48 -44 -48 -85 0 -42 15 -67 50 -85 25 -13 109
-15 590 -15 600 0 603 0 630 49 18 35 12 88 -14 118 l-24 28 -579 2 c-496 2
-582 0 -605 -12z"
            />
            <path
              d="M1538 2644 c-34 -18 -48 -43 -48 -84 0 -42 15 -67 50 -85 25 -13 156
-15 1020 -15 1065 0 1032 -2 1060 49 13 25 13 77 0 102 -28 51 6 49 -1062 49
-857 -1 -997 -3 -1020 -16z"
            />
            <path
              d="M1538 1945 c-34 -19 -48 -44 -48 -85 0 -42 15 -67 50 -85 25 -13 109
-15 590 -15 600 0 603 0 630 49 18 35 12 88 -14 118 l-24 28 -579 2 c-496 2
-582 0 -605 -12z"
            />
          </g>
        </svg>
      )}
      <Hr className="top-[59px] fixed md:w-[98%] w-[90%]" />
      {openNav && (
        <NavDiv className="flex flex-col md:hidden cursor-pointer items-center justify-start gap-5 absolute top-[58px] left-0 right-0 h-[calc(100vh-58px)] text-gray-600 bg-blue-500 dark:bg-black dark:text-white">
          <Link to="/" className="hover:text-blue-300 mt-10 text-2xl">
            Home
          </Link>
          <Link to="/contact" className="hover:text-blue-300 text-2xl">
            Contact
          </Link>
          <Link to="/features" className="hover:text-blue-300 text-2xl">
            Features
          </Link>
          <Link to="/services" className="hover:text-blue-300 text-2xl">
            Services
          </Link>
          <Link to="/pricing" className="hover:text-blue-300 text-2xl">
            Pricing
          </Link>
        </NavDiv>
      )}
    </StyledDiv>
    
    </>
  );
};

export default Navbar;

const StyledDiv = styled.div`
  height: 60px;
  border: none;
`;

const NavDiv = styled.div`
  animation: slide 0.5s ease-out forwards;

  @keyframes slide {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Hr = styled.hr`
  
  margin-left: 10px;
`;
