import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-sm mx-auto my-10 overflow-hidden rounded">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-1 border-b border-b-2 border-indigo-500">
          <input
            onChange={(e) => setText(e.target.value)}
            className="w-full px-2 mr-3 leading-loose text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 px-2 py-1 text-sm text-white bg-indigo-500 border-4 border-indigo-500 rounded hover:bg-indigo-700 hover:border-indigo-700 "
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
