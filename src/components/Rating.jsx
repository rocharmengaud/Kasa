import React from 'react';
import { BsStar } from 'react-icons/bs';

import '../styles/FicheLogement.css';

export default function Rating({ data }) {
  return (
    <>
      <div
        className="rating lg:flex-col-reverse lg:items-end lg:gap-6 lg:absolute lg:top-0 lg:right-0 flex items-center justify-between py-4"
        key={data.id}
      >
        <div className="stars flex gap-1">
          <BsStar size="1rem" />
          <BsStar size="1rem" />
          <BsStar size="1rem" />
          <BsStar size="1rem" />
          <BsStar size="1rem" />
        </div>
        <div className="profile flex items-center gap-2">
          <div className="profile-name">{data.name}</div>
          <div className="profile-picture bg-slate-200 rounded-full w-[2rem] h-[2rem]"></div>
        </div>
      </div>
    </>
  );
}
