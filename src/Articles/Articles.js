import React from "react";
import Card from "./Card";

const Articles = ({ allArticles }) => {
  if (allArticles.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No results found, Please try other Keywords.
      </p>
    );
  }

  return (
    <div className=" w-full flex flex-wrap justify-center items-center gap-8 sm:gap-6 lg:gap-8  p-4">
      {allArticles.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
