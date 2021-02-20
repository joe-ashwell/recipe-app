import React from "react";
import Styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>😋</h1>
      <a href="#">other shit</a>
    </StyledNav>
  );
};

const StyledNav = Styled.nav`
  height: 5vh;
  width: 100vw;
  background: #6d6161;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;

`;
export default Nav;
