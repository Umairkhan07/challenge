import React from "react";

const Card = ({ article }) => {
  return (
    <div className="relative flex flex-col  w-[400px] h-full  min-h-[320px] max-h-[320px] border-2 hover:cursor-pointer rounded-xl shadow-md hover:scale-[1.1] duration-300">
      <div className="flex flex-col p-2 h-full ">
        <h1 className="border-b-2 min-h-[60px] font-semibold text-center flex items-center justify-center">
          {article.title}
        </h1>
        <div className=" p-4 overflow-y-auto max-h-[180px] gap-2 flex flex-col h-full">
          <h1 className="">
            <span className="font-semibold">Author</span> : {article.author}
          </h1>
          <h1 className="">
            <span className="font-semibold">Source</span> : {article.source}
          </h1>
          <h1 className="">
            <span className="font-semibold">Category</span> : {article.category}
          </h1>
          <h1 className=" ">
            <span className="font-semibold">Date</span> : {article.publishedAt}
          </h1>
        </div>
      </div>
      <a
        className=" px-10 py-[7px] w-fit self-end absolute bottom-4 right-4 bg-blue-800 text-white rounded-lg hover:bg-blue-400 hover:text-blue-900 transition-colors duration-300"
        href={article.url}
      >
        Visit
      </a>
    </div>
  );
};

export default Card;
