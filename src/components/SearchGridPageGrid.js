import React from "react";
import { Link } from "react-router-dom";

const SearchGridPageGrid = ({ recipesFromIngredients, setSelectedRecipe }) => {
  return (
    <div className="flex flex-wrap justify-items-center">
      {recipesFromIngredients &&
        recipesFromIngredients.map((recipeLink) => (
          <Link
            to={`/recipe/${recipeLink.title}`}
            onClick={() => setSelectedRecipe(recipeLink)}
            key={recipeLink.id}
          >
            <div className="m-1 p-1">
              <img src={recipeLink.image}></img>
              <h3>{recipeLink.title}</h3>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchGridPageGrid;
