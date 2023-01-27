import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  grid-row: span 2;
  .swiper-pagination {
    display: none;
  }
  .swiper-slide {
    flex-shrink: 1;
  }
  width: 100%;
`;
