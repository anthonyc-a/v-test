import React, { useState } from "react";
import LiveNowItem from "../../Home/LiveNow/LiveNowItem";

const RecentBroadcast = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-8">
      <h2 className="text-3xl">
        Recent Broadcasts
      </h2>
      <div className="live-now-items sm:grid grid-cols-2 gap-x-4 xl:grid-cols-4">
        <LiveNowItem />
        <LiveNowItem />
        <LiveNowItem />
        <LiveNowItem />
        {showMore && (
          <>
            <LiveNowItem />
            <LiveNowItem />
            <LiveNowItem />
            <LiveNowItem />
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

export default RecentBroadcast;
