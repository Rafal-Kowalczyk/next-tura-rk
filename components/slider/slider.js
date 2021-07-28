import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import {
  SlideTitle,
  SlideImg,
  SlideContent,
} from "../projects-page/projects-page.style";
import sliderData from "./slider-data";

SwiperCore.use([EffectCoverflow]);

const Slider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      // pagination={true}
      className="mySwiper"
    >
      {sliderData.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <SlideTitle>{item.title}</SlideTitle>
            <SlideImg src={item.src} alt={item.title} />
            <SlideContent>{item.content}</SlideContent>
            <Link href={`${item.url}`}>
              <a>go GitHub code</a>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
