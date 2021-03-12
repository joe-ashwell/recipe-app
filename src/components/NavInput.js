import React, { useEffect, useRef } from "react";
import axios from "axios";

const NavInput = ({ searchResult, setSearchResult, selectedFilter }) => {
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
    <div className="input-test">
      <input
        onChange={enteredSearch}
        type="text"
        placeholder="Search more ingredients"
        ref={inputEl}
      />
    </div>
  );
};

export default NavInput;
