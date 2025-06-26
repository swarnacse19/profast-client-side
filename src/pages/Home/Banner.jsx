import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from '../../assets/banner/banner1.png';
import img2 from '../../assets/banner/banner2.png';
import img3 from '../../assets/banner/banner3.png';

function Banner() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img src={img1} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
