import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import banner1 from '../images/banner1.webp'
import banner2 from '../images/banner2.webp'
import banner3 from '../images/banner3.webp'
import banner4 from '../images/banner4.webp'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box } from '@mui/material';

const SliderBanner = () => {
  return (
    <Swiper
      className='bannerSliderContainer'
      modules={[Pagination,Navigation,Scrollbar,A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={2000}
      navigation={true}
    >
      <SwiperSlide>
        <Box sx={{ width: "100vw", height: "80vh", position: "relative" }}>
          <img src={banner1} alt="banner" style={{ width: "100%", height: "100%", position: "absolute" }} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ width: "100vw", height: "80vh", position: "relative" }}>
          <img src={banner2} alt="banner" style={{ width: "100%", height: "100%", position: "absolute" }} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ width: "100vw", height: "80vh", position: "relative" }}>
          <img src={banner3} alt="banner" style={{ width: "100%", height: "100%", position: "absolute" }} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ width: "100vw", height: "80vh", position: "relative" }}>
          <img src={banner4} alt="banner" style={{ width: "100%", height: "100%", position: "absolute" }} />
        </Box>
      </SwiperSlide>
      {/* <Box className='bannersliderShadow'></Box> */}
    </Swiper>
  )
}

export default SliderBanner;