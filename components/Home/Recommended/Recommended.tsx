import React, { useState } from "react";
import RecommendedItem from "./RecommendedItem";

const Recommended = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-14">
      <h2 className="text-3xl">
        Recommended for you
      </h2>
      <div className="recommended-items sm:grid grid-cols-2 gap-x-4 xl:grid-cols-4">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        {showMore && (
          <>
            <RecommendedItem />
            <RecommendedItem />
            <RecommendedItem />
            <RecommendedItem />
          </>
        )}
      </div>
      <div
        className="text-center mt-8 cursor-pointer"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        Show {showMore ? "less" : "more"}
      </div>
    </div>
  );
};

export default Recommended;
