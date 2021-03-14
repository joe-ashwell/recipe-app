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
      <div
        onClick={navSearchResultHandler}
        className=" bg-gray-50 hover:bg-gray-100 hover:text-gray-900 text-gray-900 p-2 m-1 w-auto"
      >
        <p>{searchResult.name}</p>
      </div>
    </Link>
  );
};

export default NavSearchResult;
