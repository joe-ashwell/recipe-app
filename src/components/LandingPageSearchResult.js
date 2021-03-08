import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const LandingPageSearchResult = ({
  searchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <Link to={`/search/${searchResult && searchResult.name}`}>
      <SearchResultDivItem
        onClick={() =>
          selectedFilter &&
          setSelectedFilter([
            ...selectedFilter,
            { name: searchResult.name, id: uuidv4() },
          ])
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
