import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <h1>😋</h1>
      </Link>
      <a href="#">other shit</a>
    </StyledNav>
  );
};

const StyledNav = Styled.nav`
  height: 5vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;

`;
export default Nav;
