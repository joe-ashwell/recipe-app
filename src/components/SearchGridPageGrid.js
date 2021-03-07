import React from "react";
import Styled from "styled-components";

const SearchGridPageGrid = ({ recipesFromIngredients }) => {
  return (
    <>
      {recipesFromIngredients &&
        recipesFromIngredients.map((recipeLink) => (
          <StyledGridDiv key={recipeLink.id}>
            <img src={recipeLink.image}></img>
            <h3>{recipeLink.title}</h3>
          </StyledGridDiv>
        ))}
    </>
  );
};

const StyledGridDiv = Styled.div``;
export default SearchGridPageGrid;
