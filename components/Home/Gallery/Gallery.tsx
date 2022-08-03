import React, { useState } from "react";
import RecommendedItem from "../Recommended/RecommendedItem";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-8">
      <h2 className="text-3xl">NFT Gallery</h2>
      <div className="gallery sm:grid grid-cols-3 gap-x-4 xl:grid-cols-3">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
      {showMore && (
        <div className="gallery sm:grid grid-cols-2 gap-x-4 xl:grid-cols-4">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      )}
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

export default Gallery;
