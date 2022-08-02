import React from "react";
import Avatar from "../../Layout/Header/Avatar/Avatar";
import LiveNowItem from "./LiveNowItem";

const LiveNow = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl">
        <span className="text-green-500">Live</span> now
      </h2>
      <div className="live-now-items sm:grid grid-cols-2 gap-x-4 xl:grid-cols-4">
        <LiveNowItem/>
        <LiveNowItem/>
        <LiveNowItem/>
        <LiveNowItem/>
      </div>
    </div>
  );
};

export default LiveNow;
