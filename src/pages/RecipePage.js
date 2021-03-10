import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import axios from "axios";

const RecipePage = ({ selectedRecipe }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    selectedRecipe &&
      axios
        .get(
          `https://api.spoonacular.com/recipes/${selectedRecipe.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_FOOD_API}`
        )
        .then((data) => setRecipe(data.data));
  }, []);
  return (
    <>
      <h1>{recipe && recipe.title}</h1>
      <img
        style={{ width: "100vw" }}
        alt={recipe && recipe.title}
        src={recipe && recipe.image}
      />
      <p>{recipe && recipe.summary}</p>
      <p>Suitable for:</p>
      <ul>
        {recipe && recipe.dishTypes.map((dishType) => <li>{dishType}</li>)}
      </ul>
      <h4>{recipe && recipe.instructions}</h4>
      <h3>Total time: {recipe && recipe.readyInMinutes} minutes</h3>
      <h3>Serves: {recipe && recipe.servings} people</h3>
      {recipe && recipe.analyzedInstructions[0] && (
        <div>
          {recipe.analyzedInstructions[0].steps.map((step) => (
            <>
              <h3>{step.number}</h3>
              <h4>{step.step}</h4>
              <ul>
                {step.ingredients.map((ingredient) => (
                  <li>{ingredient.name}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
      )}
    </>
  );
};

const Something = Styled.div`

`;

export default RecipePage;
