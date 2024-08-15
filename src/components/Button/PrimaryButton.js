import React from "react";

const PrimaryButton = ({ buttonName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-10 py-[7px] bg-blue-800 text-white rounded-lg hover:bg-blue-400 hover:text-blue-900 transition-colors duration-300"
    >
      {buttonName}
    </button>
  );
};

export default PrimaryButton;
