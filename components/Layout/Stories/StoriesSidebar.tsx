import Link from "next/link";
import React from "react";

const StoriesSidebar = () => {
  const getStories = () => {
    var stories = [];
    for (var i = 0; i < 9; i++) {
      stories.push(
        <div className="w-11 h-11 rounded-full bg-slate-300 mb-3" key={i}></div>
      );
    }
    return stories;
  };
  return (
    <div className="hidden md:flex flex-col items-center px-2 py-5 border-r-2">
      <Link href="/">
        <strong className="text-3xl">Lgo</strong>
      </Link>
      <div className="stories-contain mt-8">{getStories()}</div>
    </div>
  );
};

export default StoriesSidebar;
