import React, { useEffect } from "react";
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
    const filterItems =
      selectedFilter && selectedFilter.map((filter) => filter.name);

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
  }, [selectedFilter && selectedFilter]);

  return (
    <div className="mx-20 mb-20 overflow-x-hidden">
      <SearchGridPageSearchFilters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter.length > 0 ? (
        <SearchGridPageGrid
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          recipesFromIngredients={recipesFromIngredients}
          setSelectedRecipe={setSelectedRecipe}
        />
      ) : (
        <div className="flex flex-col justify-center items-center overflow-hidden p-8 mt-32">
          <h1 className="text-9xl">🤔</h1>
          <p>No such luck, pal. Try searching a different ingredient.</p>
        </div>
      )}
    </div>
  );
};

export default SearchGridPage;
