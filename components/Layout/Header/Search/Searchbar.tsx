import React from "react";

const Searchbar = () => {
  return (
    <div className="hidden lg:block border-solid border-2 w-fit border-gray-300 p-2 mr-8">
      <input className="h-" type="text" placeholder="Search" />
      <button className="px-2" type="submit">Search</button>
    </div>
  );
};

export default Searchbar;
