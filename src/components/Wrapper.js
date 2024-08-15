import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full  flex flex-col items-center justify-center my-10">
      {children}
    </div>
  );
};

export default Wrapper;
