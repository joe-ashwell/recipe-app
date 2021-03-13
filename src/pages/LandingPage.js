import React from "react";
import LandingPageInput from "../components/LandingPageInput";

const LandingPage = ({
  setSearchResult,
  searchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <div className="relative max-h-screen flex flex-col h-screen justify-center ml-16 ">
      <LandingPageInput
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      {/* <div className="block absolute">
        {searchResult &&
          searchResult.map((item) => (
            <LandingPageSearchResult
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              setSearchResult={setSearchResult}
              searchResult={item}
              name={item.name}
              key={item.name}
            />
          ))}
      </div> */}
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1547&q=80"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default LandingPage;
