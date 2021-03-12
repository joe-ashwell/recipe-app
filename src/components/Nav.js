import React from "react";
import { Link } from "react-router-dom";
import NavInput from "./NavInput";
import NavSearchResult from "./NavSearchResult";

const Nav = ({
  searchResult,
  setSearchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <nav className="flex m-4 p-4">
      <Link to="/">
        <h1
          className="mr-4"
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
          selectedFilter={selectedFilter}
          setSearchResult={setSearchResult}
          searchResult={searchResult}
        />
      )}
      <div className="test-resutl">
        {window.location.pathname.includes("/search/") &&
          searchResult &&
          searchResult.map((item) => (
            <NavSearchResult
              setSearchResult={setSearchResult}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              searchResult={item}
              name={item.name}
              key={item.name}
            />
          ))}
      </div>
    </nav>
  );
};

export default Nav;
