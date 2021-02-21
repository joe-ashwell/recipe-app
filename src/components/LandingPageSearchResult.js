import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPageSearchResult = ({
  setSelectedFilter,
  setSearchResult,
  searchResult,
  title,
}) => {
  const whatSelected = () => {
    // setSelectedFilter(searchResult.filter((item) => item.title === title));
  };

  return (
    <Link to={`/search/${title}`}>
      <SearchResultDivItem
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        setSelectedFilter={setSelectedFilter}
        onClick={whatSelected}
      >
        <p>{title}</p>
      </SearchResultDivItem>
    </Link>
  );
};

const SearchResultDivItem = Styled.div`
  display: block;
  cursor: pointer;
  width: 700px;
  padding: 0.5rem 0;

  &&:nth-child(even) {
    background: #e4e4e4;
  }

  p {
    font-size: 1.3rem;
    padding-left: 1rem;
  }
`;

export default LandingPageSearchResult;
