import React, { useState } from 'react';
import LogementsData from '../data/Logements.json';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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
    <div className="carousel ">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {LogementsData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide-active' : 'slide'} key={index}>
            {index === current && <img className="image" src={slide.cover} alt="" key={slide.id} />}
          </div>
        );
      })}
    </div>
  );
}
