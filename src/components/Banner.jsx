import React from 'react';
import Island from '../assets/bg_img_1.png';
import '../styles/Banner.css';

export default function Banner() {
  return (
    <div className="home-banner py-10">
      <img className="island rounded-3xl object-cover w-full h-full" src={Island} alt="Island landscape"></img>
      <div className="text-over">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}
