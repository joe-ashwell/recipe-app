import React from "react";
import Styled from "styled-components";
import axios from "axios";

const NavInput = ({ searchResult, setSearchResult }) => {
  const enteredSearch = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?query=${e.target.value}&number=5&apiKey=${process.env.REACT_APP_FOOD_API}`
      )
      .then((data) => setSearchResult(data.data));
  };

  return (
    <NavInputDiv searchResult={searchResult}>
      <input onChange={enteredSearch} type="text" placeholder="boobs" />
    </NavInputDiv>
  );
};

const NavInputDiv = Styled.div`
  input {
    width: 700px;
    padding: 0.5rem;
    margin: 2rem 0 0.5rem 0;
    font-size: 1rem;
    border-color: black;

    &:focus {
    outline: none; 
    border-color: #0066ff;
    }
  }
  


`;

export default NavInput;
