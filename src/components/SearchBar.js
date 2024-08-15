import React from "react";
import { inputSVG } from "../assets";
import PrimaryButton from "./Button/PrimaryButton";

const SearchBar = ({ handleKeywordSearch, search }) => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2">
      <div className=" relative rounded-md shadow-sm">
        <input
          ref={search}
          type="text"
          id="input-field"
          className="block  w-[300px] sm:w-[500px] pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter Search Keyword"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {inputSVG}
        </div>
      </div>
      <PrimaryButton buttonName={"Search"} onClick={handleKeywordSearch} />
    </div>
  );
};

export default SearchBar;
