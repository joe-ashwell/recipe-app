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
    </>
  );
};

const Something = Styled.div`

`;

export default RecipePage;
