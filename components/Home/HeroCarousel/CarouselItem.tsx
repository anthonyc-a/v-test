import React from "react";
import ButtonLg from "../../Common/Buttons/ButtonLg";
import Avatar from "../../Layout/Header/Avatar/Avatar";

const CarouselItem = () => {
  const data = {
    img: "https://www.tiltreport.com/media/__sizes__/Riot_Games_Discusses_Possibility_Of_Battle_Royale_In_League_Of_Legends-crop-c0-5__0-5-975x650-70.jpg",
    streamer: "MKIceAndFire",
    viewers: "1,345",
    name: "A League of Legends Gameplay | Full game",
    description:
      "This League of Legends Remastered Gameplay is recorded in 4K 60FPS on PC and will include the full game, endings and boss fights",
    tags: {
      1: "English",
      2: "MOBA",
    },
  };

  return (
    <div className="carousel-item">
      <div className="img-contain w-fill md:h-[480px] relative">
        <img className="opacity-97 w-full object-fill" src={data.img} alt="" />
        <div className="stream-info w-2/3 lg:w-2/3 xl:w-1/2 hidden md:block absolute top-1/2 -translate-y-2/4 left-20">
          <div className="streamer flex items-center mt-5">
            <Avatar />
            <h5 className="ml-2 text-gray-200">{data.streamer}</h5>
            <span className="ml-6 text-gray-200">Viewers: {data.viewers}</span>
          </div>
          <div className="stream-info mt-2">
            <h2 className="text-4xl xl:text-5xl leading-tight xl:leading-tight line-clamp-2 text-white">{data.name}</h2>
            <p className="mt-3 line-clamp-2 overflow-hidden text-ellipsis text-sm text-gray-200">
              {data.description}
            </p>
            <div className="tags mt-4 text-sm text-gray-200">
              {data.tags[1]} | {data.tags[2]}
            </div>
          </div>
          <div className="btn-contain mt-4 flex">
            <ButtonLg buttonType="play" />
            <ButtonLg buttonType="follow" />
          </div>
        </div>
      </div>

      <div className="stream-info pr-4 md:hidden">
        <div className="streamer flex items-center mt-5">
          <Avatar />
          <h5 className="ml-2 text-gray-500">{data.streamer}</h5>
          <span className="ml-6 text-gray-500">Viewers: {data.viewers}</span>
        </div>
        <div className="stream-info mt-2">
          <h2 className="text-3xl line-clamp-1">{data.name}</h2>
          <p className="mt-3 line-clamp-2 overflow-hidden text-ellipsis text-sm text-gray-800">
            {data.description}
          </p>
          <div className="tags mt-4 text-sm text-gray-500">
            {data.tags[1]} | {data.tags[2]}
          </div>
        </div>
        <div className="btn-contain mt-4 flex">
          <ButtonLg buttonType="play" />
          <ButtonLg buttonType="follow" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
