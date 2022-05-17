import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Link } from 'react-router-dom'
import './style.css'

import SantanderApp from "../../Assets/img/santanderApp.png"
import CloneMicrosoft from "../../Assets/img/cloneMicrosoft.png"
import SaofranciscoApp from "../../Assets/img/saofranciscoapp.png"
import Covid19 from "../../Assets/img/covid19.png"


const Project = () => {
  return (
    <div className="portfolio">
      <span>Projetos rencentes</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
        <SwiperSlide>
          <a href='https://www.emailjs.com/?src=email-footer'>
            <img src={SantanderApp} alt="" />
            <span>SantanderApp</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://microsoftappclone.netlify.app/'>
            <img src={CloneMicrosoft} alt="" />
            <span>Clone Microsoft</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://saofrancisco.netlify.app/'>
            <img src={SaofranciscoApp} alt="" />
            <span>SaoFranciscoApp</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href=''>
            <img src={Covid19} alt="" />
            <span>Covid19App</span>
          </a>
        </SwiperSlide>
      </Swiper>
      <Link to='/projects'>
        <button className="button p-button">Ver todos</button>
      </Link>
    </div>
  )
}

export default Project