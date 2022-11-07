import React from 'react';
import '../styles/Banner.css';

export default function Banner(props) {
  return (
    <div className="home-banner mb-6">
      <img
        className="image rounded-xl brightness-90 lg:brightness-75 lg:object-right-bottom h-28 object-cover object-right-top w-full"
        src={props.imgSrc}
        alt="Island landscape"
      ></img>
      {/* && correspond a un if dans le jsx */}
      {/* on appelle ce code du conditionnal rendering */}
      {props.description && (
        <div className="text-over">
          <h1 className="text-2xl font-medium leading-7 text-white">{props.description}</h1>
        </div>
      )}
    </div>
  );
}
