import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import airbnb from '../../img/airbnb.jpeg'

function Portfolio() {
  return (
    <div className='portfolio'>
        <span>Recent Projects </span>
        <span>Portfolio</span>
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
          <SwiperSlide>
           <img src={airbnb} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={airbnb} alt=""/>
         </SwiperSlide>
         <SwiperSlide>
         <img src={airbnb} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={airbnb} alt=""/>
       </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio