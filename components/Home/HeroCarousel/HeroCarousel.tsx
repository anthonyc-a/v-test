import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";

const HeroCarousel = () => {
  return (
    <div className="carousel md:mt-4">
      <div className="carousel-inner">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={{width: "90%"}}>
            <CarouselItem />
          </SwiperSlide>
          <SwiperSlide style={{width: "90%"}}>
            <CarouselItem />
          </SwiperSlide>
          <SwiperSlide style={{width: "90%"}}>
            <CarouselItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroCarousel;
