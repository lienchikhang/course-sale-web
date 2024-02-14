import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import carouselConstants from "../constants/carousel.constants";
import "../css/carousel.css";
import "swiper/css/navigation";
import backgroundConstants from "../constants/background.constants";

const Carousel: React.FC = () => {
  return (
    <section className="lg:pr-8">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        autoplay
      >
        {carouselConstants.slides.map(
          ({ title, desc, btnContent, bg, bg_alt }, index) => {
            return (
              <SwiperSlide
                key={index}
                className="mySwiperItem"
                style={{
                  backgroundImage: `linear-gradient(to right, ${backgroundConstants[index]} )`,
                }}
              >
                <div className="mySwiperItem__left">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <button>{btnContent}</button>
                </div>
                <div className="mySwiperItem__right">
                  <img src={bg} alt={bg_alt} />
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Carousel;
