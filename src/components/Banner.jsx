import React from 'react';
import Island from '../assets/bg_img_1.png';
import '../styles/Banner.css';

export default function Banner() {
  return (
    <div className="home-banner pb-6">
      <img
        className="image rounded-xl brightness-90 lg:brightness-75 lg:object-right-bottom h-28 object-cover object-right-top w-full"
        src={Island}
        alt="Island landscape"
      ></img>
      <div className="text-over">
        <h1 className="text-2xl font-medium leading-7 text-white">
          Chez vous,<br></br> partout et ailleurs
        </h1>
      </div>
    </div>
  );
}
