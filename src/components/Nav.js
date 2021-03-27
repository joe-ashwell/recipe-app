import React from "react";
import { Link } from "react-router-dom";
import NavInput from "./NavInput";

const Nav = ({
  searchResult,
  setSearchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <nav className="flex items-center mx-16 py-4 my-4 ">
      <Link to="/recipe-app/">
        <h1
          className="mr-10 text-2xl "
          onClick={() => {
            setSearchResult(null);
            setSelectedFilter([]);
          }}
        >
          😋
        </h1>
      </Link>
      {window.location.pathname.includes("/search/") && (
        <NavInput
          className="absolute"
          selectedFilter={selectedFilter}
          setSearchResult={setSearchResult}
          searchResult={searchResult}
          setSelectedFilter={setSelectedFilter}
        />
      )}
    </nav>
  );
};

export default Nav;
