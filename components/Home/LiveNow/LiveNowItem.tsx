import React from "react";
import Avatar from "../../Layout/Header/Avatar/Avatar";

const LiveNowItem = () => {
  const data = {
    img: "https://editors.dexerto.com/wp-content/uploads/2020/11/pewdiepie-explains-why-he-isnt-accepting-streaming-donations-anymore.jpg",
    name: "My Minecraft House Tour | 19 HO...",
    streamer: "PewDiePie",
    viewers: "4.6 K",
    tags: {
      1: "English",
      2: "MMO",
      3: "Shooter",
      4: "Play-to-earn",
    },
  };

  return (
    <div className="live-now-item mt-5 md:w-full">
      <div className="img-contain relative">
        <span className="absolute top-3 left-3 text-green-400">LIVE</span>
        <span className="absolute top-3 right-3 bg-blue-800 px-2 py-1 rounded-full text-sm text-gray-100">
          {data.viewers} viewers
        </span>
        <img src={data.img} alt="" />
      </div>
      <div className="live-now-info flex mt-4">
        <div className="mt-2">
          <Avatar />
        </div>
        <div className="info-inner ml-4">
          <h6 className="line-clamp-1">{data.name}</h6>
          <p className="text-gray-700">{data.streamer}</p>
          <div className="tags mt-1 text-sm text-gray-500">
            {data.tags[1]} | {data.tags[2]} | {data.tags[3]} | {data.tags[4]}
          </div>
        </div>
        <span className="ml-auto">more</span>
      </div>
    </div>
  );
};

export default LiveNowItem;
