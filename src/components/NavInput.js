import React, { useEffect, useRef } from "react";
import axios from "axios";
import NavSearchResult from "./NavSearchResult";

const NavInput = ({
  searchResult,
  setSearchResult,
  selectedFilter,
  setSelectedFilter,
}) => {
  const inputEl = useRef(null);

  const enteredSearch = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?query=${e.target.value}&number=5&apiKey=${process.env.REACT_APP_FOOD_API}`
      )
      .then((data) => setSearchResult(data.data));
  };

  useEffect(() => {
    inputEl && (inputEl.current.value = "");
  }, [selectedFilter]);

  return (
    <div className="w-screen">
      <input
        className="border-gray-200 border-b-2 p-2 relative w-96"
        onChange={enteredSearch}
        type="text"
        placeholder="Search more ingredients"
        ref={inputEl}
      />
      <div className="absolute w-96 bg-gray-50">
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
    </div>
  );
};

export default NavInput;
