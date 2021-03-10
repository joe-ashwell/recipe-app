import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
// import LandingPageInput from "./LandingPageInput";
// import LandingPageSearchResult from "./LandingPageSearchResult";
import NavInput from "./NavInput";
import NavSearchResult from "./NavSearchResult";

const Nav = ({
  searchResult,
  setSearchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <StyledNav>
      <Link to="/">
        <h1>😋</h1>
      </Link>
      {window.location.pathname.includes("/search/") && (
        <NavInput
          selectedFilter={selectedFilter}
          setSearchResult={setSearchResult}
          searchResult={searchResult}
        />
      )}
      {window.location.pathname.includes("/search/") &&
        searchResult &&
        searchResult.map((item) => (
          <NavSearchResult
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            searchResult={item}
            name={item.name}
            key={item.name}
          />
        ))}

      {/* <Test
        selectedFilter={selectedFilter}
        setSearchResult={setSearchResult}
        searchResult={searchResult}
      />
      {searchResult &&
        searchResult.map((item) => (
          <TestResult
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            searchResult={item}
            name={item.name}
            key={item.name}
          />
        ))} */}
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
