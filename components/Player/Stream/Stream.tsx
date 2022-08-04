import React from "react";

const Stream = () => {
  return (
    <div className="relative flex justify-center items-center w-full bg-red-300 text-white">
      <svg
      className="absolute"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="2.5em"
        width="2.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"></path>
      </svg>
      <img
        className="object-cover w-full h-60"
        src="https://www.tiltreport.com/media/__sizes__/Riot_Games_Discusses_Possibility_Of_Battle_Royale_In_League_Of_Legends-crop-c0-5__0-5-975x650-70.jpg"
        alt=""
      />
    </div>
  );
};

export default Stream;
