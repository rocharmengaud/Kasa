import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import LogementsData from '../data/Logements.json';

import '../styles/Carousel.css';

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel relative flex items-center justify-center w-full">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {LogementsData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide-active py-6' : 'slide'} key={index}>
            {index === current && <img className="image lg:h-[38rem]" src={slide.cover} alt="" key={slide.id} />}
          </div>
        );
      })}
    </div>
  );
}
