import React, { useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  // utilisation d'un ternaire
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
      <SlArrowLeft
        className="left-arrow w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem] absolute top-1/2 left-[1rem] cursor-pointer z-10"
        color="#fff"
        onClick={prevSlide}
      />
      <SlArrowRight
        className="right-arrow w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem] absolute top-1/2 right-[1rem] cursor-pointer z-10"
        color="#fff"
        onClick={nextSlide}
      />
      {props.slides.map((slide, index) => {
        return (
          <div className={index === current ? 'slide-active pb-4' : 'slide'} key={index}>
            {/* on met un if ici */}
            {/* si on a la slide active alors on render l'image */}
            {index === current && (
              <img className="image h-[16rem] w-[61rem] lg:h-[38rem] lg:w-[103rem] object-cover rounded-3xl" src={slide} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
}
