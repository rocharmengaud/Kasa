import React from 'react';
import { BsStar } from 'react-icons/bs';

export default function Rating() {
  return (
    <div className="rating flex justify-between py-4">
      <div className="stars flex gap-1">
        <BsStar size="1rem" />
        <BsStar size="1rem" />
        <BsStar size="1rem" />
        <BsStar size="1rem" />
        <BsStar size="1rem" />
      </div>
      <div className="profile flex">
        <div className="profile-name ">Nom Prenom</div>
        <img className="profile-picture" src="#" alt=""></img>
      </div>
    </div>
  );
}
