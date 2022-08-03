import { useState } from "react";

const Categories = () => {
  const categories = [
    {
      name: "Play-to-earn",
      img: "",
    },
    {
      name: "VR",
      img: "",
    },
    {
      name: "MMO",
      img: "",
    },
    {
      name: "Shooter",
      img: "",
    },
  ];

  const categories1 = [
    {
      name: "RPG",
      img: "",
    },
    {
      name: "Puzzle",
      img: "",
    },
    {
      name: "Action",
      img: "",
    },
    {
      name: "MMORPG",
      img: "",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 mt-14">
        {categories.map((category: any, i: any) => (
          <div
            key={i}
            className="relative h-20 flex justify-center items-center bg-green-500"
          >
            <div className="icon absolute w-8 h-8 -top-4 bg-gray-500"></div>
            <h2 className="text-white">{category.name}</h2>
          </div>
        ))}
        {showMore && (
          <>
            {categories1.map((category: any, i: any) => (
              <div
                key={i}
                className="relative h-20 flex justify-center items-center bg-green-500"
              >
                <div className="icon absolute w-8 h-8 -top-4 bg-gray-500"></div>
                <h2 className="text-white">{category.name}</h2>
              </div>
            ))}
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
    </>
  );
};

export default Categories;
