import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RecipePage = ({ selectedRecipe }) => {
  const [recipe, setRecipe] = useState(null);
  const history = useHistory();

  useEffect(() => {
    selectedRecipe &&
      axios
        .get(
          `https://api.spoonacular.com/recipes/${selectedRecipe.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_FOOD_API}`
        )
        .then((data) => setRecipe(data.data));
  }, [selectedRecipe]);

  return (
    <div className="mx-10 py-10 md:py-20 md-mx:20">
      <h2 className="cursor-pointer" onClick={history.goBack}>
        🔙 <span className="ml-2">Back to search </span>
      </h2>
      <h1 className="text-5xl text-center my-10">{recipe && recipe.title}</h1>

      <div className="flex items-center flex-wrap justify-center my-8 w-full">
        <img
          className="rounded-lg w-full md:w-6/12"
          alt={recipe && recipe.title}
          src={recipe && recipe.image}
        />
        <div className="md:-m-10 md:w-auto mt-8 p-4 py-8 bg-gray-100 rounded-lg w-full">
          <h3 className="text-4xl md:text-2xl mb-4">Snapshot</h3>
          <p>Suitable for:</p>
          <ul className="mb-1">
            {recipe &&
              recipe.dishTypes.map((dishType) => (
                <p className="list-disc ml-4 capitalize" key={dishType}>
                  - {dishType}
                </p>
              ))}
          </ul>
          <p className="mb-1">
            Total time: {recipe && recipe.readyInMinutes} minutes
          </p>
          <p className="mb-1">Serves: {recipe && recipe.servings} people</p>
        </div>
      </div>

      <div className="mx-2 xl:px-80 my-10">
        <h3 className="text-4xl md:text-2xl mb-2">Summary</h3>
        <p>{recipe && recipe.summary}</p>
      </div>

      {recipe && recipe.analyzedInstructions[0] && (
        <div className="mt-4 mx-2 mb-32 xl:px-80">
          <h3 className="text-4xl md:text-2xl my-2">Step by step</h3>

          {recipe.analyzedInstructions[0].steps.map((step) => (
            <div className="mb-2">
              <p className="underline">Step {step.number}</p>
              <p>{step.step}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipePage;
