import React from "react";
import { Link } from "react-router-dom";

const SearchGridPageGrid = ({ recipesFromIngredients, setSelectedRecipe }) => {
  return (
    <>
      <div>
        <h1 className="text-6xl my-10">Recipes</h1>
      </div>
      <div className="flex flex-wrap w-screen">
        {recipesFromIngredients &&
          recipesFromIngredients.map((recipeLink) => (
            <Link
              to={`/recipe/${recipeLink.title}`}
              onClick={() => setSelectedRecipe(recipeLink)}
              key={recipeLink.id}
            >
              <div className="m-1 p-1 w-full">
                <img className="rounded-xl " src={recipeLink.image}></img>
                <p>{recipeLink.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default SearchGridPageGrid;
