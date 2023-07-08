import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import arrivals1 from '../images/newArrivals1.jpg';
import arrivals2 from '../images/newArrivals2.jpg';
import arrivals3 from '../images/newArrivals3.jpg';
import arrivals4 from '../images/newArrivals4.jpg';
import arrivals5 from '../images/newArrivals5.jpg';
import arrivals6 from '../images/newArrivals6.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react'

const NewArrivals = ()=>{

    const newArivals = [
        {image:arrivals1,brandName:"Sony",para:"G.M.D. FASHION Women Polyester Solid A-Line Mini Western V-Neck Full"},
        {image:arrivals2,brandName:"samsung",para:"G.M.D. FASHION Women Polyester Solid A-Line Mini Western V-Neck Full"},
        {image:arrivals3,brandName:"Sony",para:"G.M.D. FASHION Women Polyester Solid A-Line Mini Western V-Neck Full"},
        {image:arrivals4,brandName:"Moto",para:"G.M.D. FASHION Women Polyester Solid A-Line Mini Western V-Neck Full"},
        {image:arrivals5,brandName:"realme",para:"G.M.D. FASHION Women Polyester Solid A-Line Mini Western V-Neck Full"},
        {image:arrivals6,brandName:"Sony",para:"G.M.D. FASHION Women Polyester Solid A-Line Mini Western V-Neck Full"},
    ]

    return (
        <Box className="newArrivalsContainer">
            <Box className="newArrivalsHeading" sx={{width:{xs:"98%",sm:"95%",md:"98%"},margin:"0 auto"}}>
                <Typography variant='h4'>New Arrivals</Typography>
                <Typography className='moreNewArrivals'>more</Typography>
            </Box>
            <Swiper
      className='bannerSliderContainer'
      modules={[Pagination,Navigation,Scrollbar,A11y]}
      spaceBetween={50}
      slidesPerView={"auto"}
      loop={true}
      speed={1000}
      navigation={true}
    >
      {
        newArivals.map((list , index)=>{
            return(
                <SwiperSlide key={index} className='cardsliderContainer'>
                    <Box className="card">
                    <Box sx={{ width: {xs:"250px",sm:"300px",md:"200px"}, height: "200px",marginLeft:"10px", position: "relative" }}>
                        <img src={list.image} alt="banner" style={{ width: "100%", height: "100%", position: "absolute" }} />
                    </Box>
                    <Typography sx={{fontSize:"19px"}}>{list.brandName}</Typography>
                    <Typography>{list.para}</Typography>

                    </Box>
                </SwiperSlide>
            )
        })
      }
      
    </Swiper>
        </Box>
    )
}

export default NewArrivals