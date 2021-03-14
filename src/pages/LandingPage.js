import React from "react";
import LandingPageInput from "../components/LandingPageInput";

const LandingPage = ({
  setSearchResult,
  searchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <div className="max-h-screen flex flex-col justify-center h-5/6 ml-10">
      <LandingPageInput
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
    </div>
  );
};

export default LandingPage;
