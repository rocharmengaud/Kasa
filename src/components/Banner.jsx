import React from 'react';

export default function Banner(props) {
  return (
    <div className="home-banner relative mb-6">
      <img
        className="image rounded-xl brightness-90 lg:brightness-75 lg:object-right-bottom lg:h-40 h-28 object-cover object-right-top w-full"
        src={props.imgSrc}
        alt="Island landscape"
      ></img>
      {/* && correspond a un if dans le jsx */}
      {/* on appelle ce code du conditionnal rendering */}
      {props.description && (
        <div className="text-over left-6 absolute top-0 flex flex-col justify-center w-full h-full">
          <h1 className="lg:text-center lg:text-4xl text-2xl font-medium leading-7 text-white">{props.description}</h1>
        </div>
      )}
    </div>
  );
}
