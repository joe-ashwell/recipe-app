import React from "react";
import Styled from "styled-components";

const LandingPageSearchResult = ({ searchResult, title }) => {
  return (
    <SearchResultDivItem searchResult={searchResult}>
      <p>{title}</p>
    </SearchResultDivItem>
  );
};

const SearchResultDivItem = Styled.div`
  display: block;
  cursor: pointer;
  width: 700px;
  padding: 0.5rem 0;

  &&:nth-child(even) {
    background: grey;
  }

  p {
    font-size: 1.3rem;
    padding-left: 1rem;
  }
`;

export default LandingPageSearchResult;
