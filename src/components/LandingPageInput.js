import React from "react";
import Styled from "styled-components";
import axios from "axios";

const LandingPageInput = ({ searchResult, setSearchResult }) => {
  const enteredSearch = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/autocomplete?number=5&query=${e.target.value}&apiKey=${process.env.REACT_APP_FOOD_API}`
      )
      .then((data) => setSearchResult(data.data));
  };

  return (
    <StyledInputDiv searchResult={searchResult}>
      <input
        onChange={enteredSearch}
        type="text"
        placeholder="Give me food..."
      />
    </StyledInputDiv>
  );
};

const StyledInputDiv = Styled.div`
  input {
    width: 700px;
    padding: 1rem;
    margin: 2rem 0 0.5rem 0;
    font-size: 1.2rem;
    border-radius: 2rem;
    border-color: black;

    &:focus {
    outline: none; 
    border-color: #0066ff;
    }
  }
  


`;

export default LandingPageInput;
