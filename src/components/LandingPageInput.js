import React from "react";
import axios from "axios";

const LandingPageInput = ({ searchResult, setSearchResult }) => {
  const enteredSearch = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?query=${e.target.value}&number=5&apiKey=${process.env.REACT_APP_FOOD_API}`
      )
      .then((data) => setSearchResult(data.data));
  };

  return (
    <div searchResult={searchResult} className="max-w-screen-lg absolute">
      <h1 className="mb-6 text-9xl">What's left in your fridge?</h1>

      <input
        className="border-gray-600 border-2 rounded p-4 w-1/2"
        onChange={enteredSearch}
        type="text"
        placeholder="Give me food..."
      />
    </div>
  );
};

export default LandingPageInput;
