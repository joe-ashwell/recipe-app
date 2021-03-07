import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPageSearchResult = ({
  name,
  searchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <Link to={`/search/${selectedFilter && selectedFilter.join("+")}`}>
      <SearchResultDivItem
        onClick={() =>
          selectedFilter &&
          setSelectedFilter([...selectedFilter, searchResult.name])
        }
      >
        <p>{searchResult.name}</p>
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
