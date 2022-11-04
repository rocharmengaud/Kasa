import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <>
      {/* ici on écris props.data car on à choisi d'écrire le mot data dans home.jsx ligne 18 */}
      {props.data.map((value, index) => (
        <div className="card relative mb-6 overflow-hidden border-2 border-gray-200 rounded-lg" key={value.id}>
          <Link to={'/FicheLogement/' + value.id}>
            <div className="card-image h-50">
              <img className="h-[13rem] w-full object-cover" src={value.cover} alt={value.title} />
            </div>
            <div className="card-title bottom-4 left-4 absolute font-bold text-white">{value.title}</div>
          </Link>
        </div>
      ))}
    </>
  );
}
