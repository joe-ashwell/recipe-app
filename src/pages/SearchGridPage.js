import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import SearchGridPageGrid from "../components/SearchGridPageGrid";
import SearchGridPageSearchFilters from "../components/SearchFilters";
import axios from "axios";

const SearchGridPage = ({
  setSelectedFilter,
  selectedFilter,
  setRecipesFromIngredients,
  recipesFromIngredients,
  setSelectedRecipe,
}) => {
  useEffect(() => {
    const filterItems = selectedFilter.map((filter) => filter.name);

    selectedFilter &&
      axios
        .get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${filterItems.join(
            ",+"
          )}&number=5&apiKey=${
            process.env.REACT_APP_FOOD_API
          }&includeNutrition=true`
        )
        .then((data) => setRecipesFromIngredients(data.data));
  }, [selectedFilter]);

  return (
    <>
      <SearchGridPageSearchFilters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <SearchGridPageGrid
        selectedFilter={selectedFilter}
        recipesFromIngredients={recipesFromIngredients}
        setSelectedRecipe={setSelectedRecipe}
      />
    </>
  );
};

export default SearchGridPage;
