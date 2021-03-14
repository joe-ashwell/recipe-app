import React from "react";
import axios from "axios";
import LandingPageSearchResult from "./LandingPageSearchResult";

const LandingPageInput = ({
  searchResult,
  setSearchResult,
  setSelectedFilter,
  selectedFilter,
}) => {
  const enteredSearch = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?query=${e.target.value}&number=5&apiKey=${process.env.REACT_APP_FOOD_API}`
      )
      .then((data) => setSearchResult(data.data));
  };

  return (
    <div className="max-w-screen-lg">
      <h1 className="mb-6 text-8xl">What's left in your fridge?</h1>
      <div className="w-full">
        <input
          className="border-gray-600 border-2 rounded p-4 relative w-1/2"
          onChange={enteredSearch}
          type="text"
          placeholder="Give me food..."
        />
        <div className="absolute w-1/2 bg-gray-50">
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
        </div>
      </div>
    </div>
  );
};

export default LandingPageInput;
