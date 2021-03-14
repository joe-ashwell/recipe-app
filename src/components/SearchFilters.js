import React from "react";
import { v4 as uuidv4 } from "uuid";

const SearchGridPageSearchFilters = ({ setSelectedFilter, selectedFilter }) => {
  const removeFilterItem = (e) => {
    setSelectedFilter(selectedFilter.filter((item) => item.id !== e.target.id));
  };

  return (
    <div>
      {selectedFilter && selectedFilter.length > 0 && (
        <p className="text-lg mb-2">Filters:</p>
      )}

      <div className="flex flex-row">
        {selectedFilter &&
          selectedFilter.map((item) => (
            <p
              className="cursor-pointer mr-2 p-2 bg-indigo-50 text-indigo-900"
              onClick={removeFilterItem}
              key={uuidv4()}
              id={item.id}
            >
              {item.name} ✖️
            </p>
          ))}
      </div>
    </div>
  );
};

export default SearchGridPageSearchFilters;
