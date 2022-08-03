import React from "react";

const data = {
  img1: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/city-art-ny-times-square-melanie-viola.jpg",
  img2: "https://papers.co/wallpaper/papers.co-vy50-digital-art-square-graph-bokeh-pattern-background-40-wallpaper.jpg",
  img3: "https://images.fineartamerica.com/images-medium-large-5/abstract-art-homage-to-mondrian-square-ann-powell.jpg",
  category: "Art",
};

const GalleryItem = () => {
  return (
    <div className="gallery-item relative mt-14">
      <div className="gallery-img flex">
        <div className="img-contain w-1/3 h-1/3 scale-90">
          <img src={data.img1} alt="" className="object-fill" />
        </div>
        <div className="img-contain w-1/3 h-1/3 scale-110 -translate-y-2 z-10">
          <img src={data.img2} alt="" className="object-fill" />
        </div>
        <div className="img-contain w-1/3 h-1/3 scale-90">
          <img src={data.img3} alt="" className="object-fill" />
        </div>
      </div>
      <div className="category flex justify-center items-center absolute -bottom-2 left-0 w-full h-10 bg-green-500 text-white opacity-95 z-20">
        {data.category}
      </div>
    </div>
  );
};

export default GalleryItem;
