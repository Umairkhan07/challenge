import React from "react";
import SearchBar from "./SearchBar";
import SimpleMenu from "./DropDown/SimpleMenu";

const Controls = ({
  data,
  handleKeywordSearch,
  search,
  filters,
  setFilters,
}) => {
  return (
    <div className="w-full mb-6 flex flex-col items-center justify-center space-y-6 px-4">
      <SearchBar handleKeywordSearch={handleKeywordSearch} search={search} />
      <div className="flex flex-wrap items-center justify-center gap-2">
        <SimpleMenu
          options={[...new Set(data.map((item) => item.publishedAt))]}
          label="Filter By Date"
          selected={filters.date}
          setSelected={(value) => {
            setFilters({
              ...filters,
              date: value,
            });
          }}
        />{" "}
        <SimpleMenu
          options={[...new Set(data.map((item) => item.source))]}
          label="Filter By Source"
          selected={filters.source}
          setSelected={(value) => {
            setFilters({
              ...filters,
              source: value,
            });
          }}
        />
        <SimpleMenu
          options={[...new Set(data.map((item) => item.category))]}
          label="Filter By Category"
          selected={filters.category}
          setSelected={(value) => {
            setFilters({
              ...filters,
              category: value,
            });
          }}
        />
        <SimpleMenu
          options={[...new Set(data.map((item) => item.author))]}
          label="Filter By Author"
          selected={filters.author}
          setSelected={(value) => {
            setFilters({
              ...filters,
              author: value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default Controls;
