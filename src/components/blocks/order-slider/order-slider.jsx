import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper";
import SliderCard from "/src/components/ui/slider-card/slider-card";
import { StyledSwiper } from "./styles";
SwiperCore.use([Pagination, Mousewheel, Scrollbar]);

function OrderSlider({ buyOptions, onSwiper }) {
  return (
    <StyledSwiper
      spaceBetween={12}
      direction="vertical"
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      mousewheel
      pagination={{ type: "fraction" }}
      onSwiper={onSwiper}
    >
      {buyOptions.map((product) => (
        <SwiperSlide key={product.id}>
          <SliderCard product={product} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export default OrderSlider;
