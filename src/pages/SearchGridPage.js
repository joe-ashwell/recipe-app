import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import SearchGridPageGrid from "../components/SearchGridPageGrid";
import SearchGridPageSearchFilters from "../components/SearchFilters";
import axios from "axios";

const SearchGridPage = ({ selectedFilter }) => {
  const [recipesFromIngredients, setRecipesFromIngredients] = useState(null);

  useEffect(() => {
    selectedFilter &&
      axios
        .get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedFilter.join(
            ",+"
          )}&number=5&apiKey=${
            process.env.REACT_APP_FOOD_API
          }&includeNutrition=true`
        )
        .then((data) => setRecipesFromIngredients(data.data));
  }, [selectedFilter]);

  return (
    <>
      <SearchGridPageSearchFilters selectedFilter={selectedFilter} />
      <SearchGridPageGrid
        selectedFilter={selectedFilter}
        recipesFromIngredients={recipesFromIngredients}
      />
    </>
  );
};

export default SearchGridPage;
