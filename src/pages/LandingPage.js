import React, { useState } from "react";
import Styled from "styled-components";
import LandingPageText from "../components/LandingPageText";
import LandingPageInput from "../components/LandingPageInput";
import LandingPageSearchResult from "../components/LandingPageSearchResult";

const LandingPage = ({ searchResult, setSearchResult }) => {
  return (
    <LandingPageDiv>
      <LandingPageText />
      <LandingPageInput
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <SearchResultsDiv>
        {searchResult &&
          searchResult.map((item) => (
            <LandingPageSearchResult searchResult={item} title={item.title} />
          ))}
      </SearchResultsDiv>
    </LandingPageDiv>
  );
};

const LandingPageDiv = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  padding: 3rem;
  height: 79vh;
  overflow: hidden;
`;

const SearchResultsDiv = Styled.div`
  position: absolute;
  margin-top: calc((11.5 * 41px) + 54px);
  height: calc(5 * 41px);
  overflow: auto;
`;

export default LandingPage;
