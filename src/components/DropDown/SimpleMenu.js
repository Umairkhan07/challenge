import React from "react";
import { clearSVG } from "../../assets";

const SimpleMenu = ({ options, selected, setSelected, label }) => {
  return (
    <div class="w-64">
      <label
        for="countries"
        class=" text-sm font-medium text-gray-700 flex  items-center justify-between"
      >
        {label}{" "}
        <span
          className="font-thin text-xs mr-1 hover:scale-[1.1] cursor-pointer duration-300 "
          onClick={() => {
            setSelected(null);
          }}
        >
          {clearSVG}
        </span>
      </label>
      <select
        id={label}
        name={label}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        className="bg-white border border-gray-300 outline-none text-black text-sm rounded-[5px] focus:ring-1 focus:ring-blue-600 focus:border-blue-600 dark:focus:border-black flex justify-between items-center p-2 w-full dark:focus:ring-black duration-500"
      >
        <option value="select" selected={selected ? false : true} disabled>
          Select
        </option>

        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SimpleMenu;
