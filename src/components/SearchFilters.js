import React from "react";
import Styled from "styled-components";

const SearchGridPageSearchFilters = ({ selectedFilter }) => {
  return (
    <FiltersDiv selectedFilter={selectedFilter}>
      <div>{selectedFilter && selectedFilter.map((item) => <p>{item}</p>)}</div>
    </FiltersDiv>
  );
};

const FiltersDiv = Styled.div``;
export default SearchGridPageSearchFilters;
