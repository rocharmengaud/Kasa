import React, { useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

import '../styles/Carousel.css';

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // verification de si l'array est vide
  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel relative flex items-center justify-center w-full">
      <SlArrowLeft className="left-arrow" size={40} color="#fff" onClick={prevSlide} />
      <SlArrowRight className="right-arrow" size={40} color="#fff" onClick={nextSlide} />
      {props.slides.map((slide, index) => {
        return (
          <div className={index === current ? 'slide-active pb-4' : 'slide'} key={index}>
            {index === current && (
              <img className="image h-[16rem] w-[21rem] lg:h-[38rem] lg:w-[103rem] object-cover rounded-3xl" src={slide} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
}
