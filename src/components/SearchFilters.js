import React from "react";
import Styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const SearchGridPageSearchFilters = ({ setSelectedFilter, selectedFilter }) => {
  const removeFilterItem = (e) => {
    setSelectedFilter(selectedFilter.filter((item) => item.id !== e.target.id));
  };

  return (
    <FiltersDiv selectedFilter={selectedFilter}>
      <FiltersDivItem>
        {selectedFilter &&
          selectedFilter.map((item) => (
            <p onClick={removeFilterItem} key={uuidv4()} id={item.id}>
              {item.name}
            </p>
          ))}
      </FiltersDivItem>
    </FiltersDiv>
  );
};

const FiltersDiv = Styled.div`
  width: 100%;
`;

const FiltersDivItem = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  p {
    padding: 1rem;
    background-color: blue;
    color: white;
  }

`;
export default SearchGridPageSearchFilters;
