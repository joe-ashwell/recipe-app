import React from "react";
import { v4 as uuidv4 } from "uuid";

const SearchGridPageSearchFilters = ({ setSelectedFilter, selectedFilter }) => {
  const removeFilterItem = (e) => {
    setSelectedFilter(selectedFilter.filter((item) => item.id !== e.target.id));
  };

  return (
    <div>
      {selectedFilter && <p>Filters:</p>}

      <div className="flex flex-row">
        {selectedFilter &&
          selectedFilter.map((item) => (
            <p
              className="cursor-pointer m-1 p-1 bg-indigo-50 text-indigo-900"
              onClick={removeFilterItem}
              key={uuidv4()}
              id={item.id}
            >
              {item.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SearchGridPageSearchFilters;
