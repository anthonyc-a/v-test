import { Swiper, SwiperSlide } from "swiper/react";

const Stories = () => {
  const getStories = () => {
    var stories = [];
    for (var i = 0; i < 9; i++) {
      stories.push(
        <SwiperSlide>
          <div className="w-11 h-11 rounded-full bg-slate-300" key={i}></div>
        </SwiperSlide>
      );
    }
    return stories;
  };

  return (
    <div className="py-3 md:hidden">
      <div className="stories pl-3">
        <Swiper
          spaceBetween={0}
          mousewheel={true}
          slidesPerView={7}
          freeMode={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {getStories()}
        </Swiper>
      </div>
    </div>
  );
};

export default Stories;
