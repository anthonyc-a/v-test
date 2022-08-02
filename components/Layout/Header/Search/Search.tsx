import React, { useState } from "react";

const Search = ({ setSearchActive, searchActive }: any) => {
  return (
    <>
      <div className="search-l">
        <span
          onClick={() => {
            setSearchActive(!searchActive);
          }}
          className="cursor-pointer"
        >
          Back
        </span>
      </div>
      <div className="search-r">
        <input type="text" className="border-solid border-2 border-blue-500 mr-4" />
        <button type="submit">Search</button>
      </div>
    </>
  );
};

export default Search;
