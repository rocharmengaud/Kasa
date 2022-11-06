import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <>
      <div className="card relative mb-6 overflow-hidden border-2 border-gray-200 rounded-lg">
        <Link to={'/FicheLogement/' + props.id}>
          <div className="card-image h-50">
            <img className="h-[13rem] w-full object-cover" src={props.cover} alt={props.title} />
          </div>
          <div className="card-title bottom-4 left-4 absolute font-bold text-white">{props.title}</div>
        </Link>
      </div>
    </>
  );
}
