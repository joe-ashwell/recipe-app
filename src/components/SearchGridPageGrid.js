import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const SearchGridPageGrid = ({ recipesFromIngredients, setSelectedRecipe }) => {
  return (
    <>
      {recipesFromIngredients &&
        recipesFromIngredients.map((recipeLink) => (
          <Link
            to={`/recipe/${recipeLink.title}`}
            onClick={() => setSelectedRecipe(recipeLink)}
          >
            <StyledGridDiv key={recipeLink.id}>
              <img src={recipeLink.image}></img>
              <h3>{recipeLink.title}</h3>
            </StyledGridDiv>
          </Link>
        ))}
    </>
  );
};

const StyledGridDiv = Styled.div``;
export default SearchGridPageGrid;
