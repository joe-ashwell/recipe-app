import React from "react";
import Styled from "styled-components";
import SearchGridPageGrid from "../components/SearchGridPageGrid";

const SearchGridPage = ({
  searchResult,
  title,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <div>
      <h1>twat</h1>
      <p>selectedFilter</p>
      <SearchGridPageGrid />
    </div>
  );
};

export default SearchGridPage;
