import React from "react";
import Styled from "styled-components";
import LandingPageText from "../components/LandingPageText";
import LandingPageInput from "../components/LandingPageInput";
import LandingPageSearchResult from "../components/LandingPageSearchResult";

const LandingPage = ({ setSearchResult, searchResult, setSelectedFilter }) => {
  return (
    <LandingPageDiv>
      <LandingPageText />
      <LandingPageInput
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        setSelectedFilter={setSelectedFilter}
      />
      <SearchResultsDiv>
        {searchResult &&
          searchResult.map((item) => (
            <LandingPageSearchResult
              setSelectedFilter={setSelectedFilter}
              searchResult={item}
              name={item.name}
              key={item.name}
            />
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
