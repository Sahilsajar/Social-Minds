import React from "react";
import styled from "styled-components";

const Navbar = ({ toggleTheme }) => {
  return (
    <StyledDiv className="flex items-center">
      <h1 className="ml-10">Navbar</h1>
      <div className="flex items-center absolute right-10 gap-9 ">
        <div>Home</div>
        <div>Works</div>
        <div>Features</div>
        <div>Services</div>
        <div>Pricing</div>
        <StyledButton className="p-1" onClick={toggleTheme}>
          Toggle Theme
        </StyledButton>
      </div>
    </StyledDiv>
  );
};

export default Navbar;

const StyledButton = styled.button`
  background: ${(props) => props.theme.button.background};
  height: 40px;
  width: 120px;
  border-radius: 5px;
  color: ${(props) => props.theme.button.color};
`;

const StyledDiv = styled.div`
  background: ${(props) => props.theme.gradients.navbar};
  color: ${(props) => props.theme.colors.lightText};
  height: 60px;
`;
