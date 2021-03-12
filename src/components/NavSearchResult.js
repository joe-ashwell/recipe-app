import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NavSearchResult = ({
  setSearchResult,
  searchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  const navSearchResultHandler = () => {
    selectedFilter &&
      setSelectedFilter([
        ...selectedFilter,
        { name: searchResult.name, id: uuidv4() },
      ]);

    setSearchResult(null);
  };
  return (
    <Link to={`/search/${searchResult && searchResult.name}`}>
      <div onClick={navSearchResultHandler} className="result-test">
        <p>{searchResult.name}</p>
      </div>
    </Link>
  );
};

export default NavSearchResult;
