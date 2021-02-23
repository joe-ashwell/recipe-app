import React from "react";
import Styled from "styled-components";

const SearchGridPageGrid = ({ selectedFilter, recipesFromIngredients }) => {
  return (
    <>
      {recipesFromIngredients &&
        recipesFromIngredients.map((recipeLink) => (
          <StyledGridDiv>
            <img src={recipeLink.image}></img>
            <h3>{recipeLink.title}</h3>
            {console.log(recipeLink)}
          </StyledGridDiv>
        ))}
    </>
  );
};

const StyledGridDiv = Styled.div``;
export default SearchGridPageGrid;
