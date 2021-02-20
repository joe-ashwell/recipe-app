import React from "react";
import Styled from "styled-components";

const LandingPageText = () => {
  return (
    <StyledLandingPageDiv>
      <h1>What's left in your fridge?</h1>
    </StyledLandingPageDiv>
  );
};

const StyledLandingPageDiv = Styled.div`
  display: block;

  h1 {
    font-size: 7rem;
    line-height: 1;
  }
`;
export default LandingPageText;
