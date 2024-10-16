
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';
import { EffectCards } from 'swiper/modules';
import Image from '../imageComponent/Image';
const BannarCard = ({data}) => {
  console.log(data);
  
  return (
    <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    {
      data.map((book)=>
       
        (<SwiperSlide style={{borderRadius:0,border:'1px solid black' }}  key={book.id}>
        <Image id={book.id} image={book.image} key={book.id}/>
          </SwiperSlide>)
      
      )
    }
   
    {/* <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> */}
  </Swiper>
  )
}

export default BannarCard