import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

import "swiper/css";

const Slider = ({ data, noOfSlides }) => {
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={noOfSlides}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        578: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: `${noOfSlides}`,
          spaceBetween: 40,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((currSlide) => {
        return (
          <SwiperSlide key={currSlide.id}>
            <img
              className="w-full h-full rounded-xl"
              src={currSlide.image}
              alt={currSlide.id}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
