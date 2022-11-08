import React from 'react';
import '../styles/FicheLogement.css';
import Stars from './Stars';

export default function Rating(props) {
  return (
    <div className="rating lg:flex-col-reverse lg:items-end lg:gap-3 lg:absolute lg:top-0 lg:right-0 flex items-center justify-between py-4">
      <Stars rating={parseInt(props.rating)} />
      <div className="profile flex items-center gap-4">
        <div className="profile-name">{props.name}</div>
        <div className="profile-picture">
          <img className="w-[4rem] rounded-full" src={props.picture} alt={props.name} />
        </div>
      </div>
    </div>
  );
}
