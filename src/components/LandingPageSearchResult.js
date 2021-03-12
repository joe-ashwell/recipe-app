import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const LandingPageSearchResult = ({
  setSearchResult,
  searchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  const searchResultHandler = () => {
    selectedFilter &&
      setSelectedFilter([
        ...selectedFilter,
        { name: searchResult.name, id: uuidv4() },
      ]);

    setSearchResult(null);
  };

  return (
    <Link to={`/search/${searchResult && searchResult.name}`}>
      <div
        className="block bg-indigo-50 text-indigo-900 z-10"
        onClick={searchResultHandler}
      >
        <p>{searchResult.name}</p>
      </div>
    </Link>
  );
};

export default LandingPageSearchResult;
